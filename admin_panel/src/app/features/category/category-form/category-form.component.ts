import { Component } from "@angular/core";
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { ActivatedRoute, Router, RouterOutletContract } from "@angular/router";
import { SpinnerService, ToastService } from "@core/services";
import { CategoryService } from "@shared/services/category.service";
import { ValidationService } from "@core/components";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "app-category-form",
  templateUrl: "./category-form.component.html",
  styleUrls: ["./category-form.component.scss"],
})
export class CategoryFormComponent {
  parentIdArr: any = [];
  submitted: boolean = false;
  categoryId: string = null;
  fileName: any = "";
  url: any = null;
  file: any = null;
  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private categoryService: CategoryService,
    private toastService: ToastService,
    private spinner: SpinnerService,
    private validationService: ValidationService,
    private domSanitizer: DomSanitizer
  ) {}

  categoryForm = new FormGroup({
    _id: new FormControl(null),
    name: new FormControl(null, [Validators.required]),
    slug: new FormControl(null, [Validators.required]),
    image: new FormControl(null),
    modulePrefix: new FormControl(null, [Validators.required]),
    autoIncrementValue: new FormControl(null, [Validators.required]),
    digit: new FormControl(4),
    status: new FormControl("active", [Validators.required]),
    parentId: new FormControl(null),
  });
  options = [];
  get f() {
    return this.categoryForm.controls;
  }

  FORM_ERRORS = [
    {
      message: "Name is required",
      key: "name",
    },
    {
      message: "Slug is required",
      key: "slug",
    },
    {
      message: "Status is required",
      key: "status",
    },
  ];

  ngOnInit(): void {
    this.getAllMasterData();
    // this.getByParentId();
    this.activated.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.getDataById(params.id);
        this.categoryId = params.id;
      }
    });
  }

  submit() {
    this.submitted = true;
    if (
      this.validationService.checkErrors(this.categoryForm, this.FORM_ERRORS)
    ) {
      return;
    }
    let categoryData: any = this.categoryForm.value;
    if (categoryData.parentId == "null") {
      categoryData.parentId = null;
    }
    if (categoryData._id) {
      this.update(categoryData._id, categoryData);
    } else {
      this.create(categoryData);
    }
  }

  create(formData) {
    this.spinner.show();
    this.categoryService.createCategory(formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(["default/category/category-list"]);
    });
  }

  update(_id, formData) {
    this.spinner.show();
    this.categoryService
      .updateCategoryById(_id, formData)
      .subscribe((success: any) => {
        this.spinner.hide();
        this.toastService.success(success.message);
        this.router.navigate(["default/category/category-list"]);
      });
  }
  getDataById(id: string) {
    this.spinner.show();
    this.categoryService.getById(id).subscribe((success: any) => {
      this.url = success.image;
      this.categoryForm.patchValue(success);
      this.spinner.hide();
    });
  }

  getByParentId() {
    this.spinner.show();
    this.categoryService.getParentId().subscribe((success: any) => {
      this.spinner.hide();
      this.options = success.map((category) => ({
        _id: category._id,
        name: category.name,
      }));
      let def = { _id: "", name: "Parent" };
      this.options.unshift(def);
    });
  }
  fileChosen(event: any) {
    if (event.target.files.length) {
      if (event.target.files[0].size > 2000000) {
        this.toastService.warning(
          "Unable to upload file of size more than 1MB"
        );
        return;
      }
      this.file = <File>event.target.files[0];
      this.fileName = this.file.name;
      const type = this.file.type;
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        let base64: any = reader.result;
        this.url = this.domSanitizer.bypassSecurityTrustUrl(base64);
      };
      reader.onerror = (error) => {
        console.error(error);
      };
    }
  }
  back() {
    this.router.navigate(["default/category/category-list"]);
  }
  reset() {
    this.categoryForm.reset();
    if (this.categoryId) {
      this.getDataById(this.categoryId);
    }
  }
  openUrl(url) {
    window.open(url, "_blank");
  }

  getAllMasterData() {
    this.categoryService.getAllMasterData({}).subscribe((success: any) => {
      this.parentIdArr = success.map((x: any) => {
        return {
          label: x.name,
          value: x._id,
        };
      });
    });
  }
}