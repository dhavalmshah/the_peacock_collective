import { Component, Input } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SpinnerService, ToastService } from "@core/services";
import { ValidationService } from "@core/components";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { CustomerService } from "@shared/services/customer.service";
@Component({
  selector: "app-customer-model",
  templateUrl: "./customer-model-new.component.html",
  styleUrls: ["./customer-model-new.component.scss"],
})
export class CustomerModelNewComponent {
  submitted: boolean = false;
  userId: string = null;

  @Input() customerObj:any

  constructor(
    private router: Router,
    private spinner: SpinnerService,
    private validationService: ValidationService,
    private customerService: CustomerService,
    private toastService: ToastService,
    public modelService: NgbActiveModal
  ) {}

  customerForm = new FormGroup({
    _id: new FormControl(null),
    customerName: new FormControl(null, [Validators.required]),
    mobile: new FormControl(null, [Validators.required]),
    whatsUp: new FormControl(null),
    email: new FormControl(null),
    DOB: new FormControl(null),
    currency: new FormControl("INR"),
    address: new FormGroup({
      line1: new FormControl(null),
      line2: new FormControl(null),
      city: new FormControl(null),
      state: new FormControl(null),
      country: new FormControl("India"),
      pinCode: new FormControl(null),
    }),
  });
  get f() {
    return this.customerForm.controls;
  }
  FORM_ERRORS = [
    {
      message: "Name is Required",
      key: "customerName",
    },
    {
      message: "Mobile is Required",
      key: "mobile",
    },
  ];
  ngOnInit(): void {
    if (this.customerObj.customerName) {
      this.f["customerName"].setValue(this.customerObj.customerName);
    }
    if (this.customerObj.mobile) {
      this.f["mobile"].setValue(this.customerObj.mobile);
    }
  }
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  submit() {
    this.submitted = true;
    if (
      this.validationService.checkErrors(this.customerForm, this.FORM_ERRORS)
    ) {
      return;
    }

    let formData: any = this.customerForm.value;
    formData.role = "Admin";

    this.create(formData);
  }
  create(formData) {
    this.spinner.show();
    this.customerService.create(formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.modelService.close(success.customerDetails);
    });
  }

  reset() {
    this.customerForm.reset();
  }
}