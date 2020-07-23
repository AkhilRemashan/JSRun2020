<a href="" (click)="smoothScroll()" href="javascript:void(null);" rel="nofollow" return="">Get A Quote</a>

export class V2PricingComponent implements OnInit {

  constructor() { }

  smoothScroll() {
    $('html, body').animate({ scrollTop: $('#form-price-one').offset().top - 200 }, 'slow');
  }

  ngOnInit() {
  }

}