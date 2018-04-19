<template>
<div class="container-fluid relative bg-light-gray bg-img6">
					<section class="container sec6">

						<div class="row">
							<div class="text-center">
								<div class="ptitle">
									<h3 class="text-blue aos-init" data-aos="zoom-out"> Valuation Data </h3>
									<p class="text-gray aos-init" data-aos="zoom-out" data-aos-delay="100"> Latest Share Price </p>
								</div>
							</div>
						</div>

						<div class="row">

							<div class="col-md-3">
								<div class="circle circle1 aos-init" data-aos="zoom-out" data-aos-delay="200">
									<div class="fillin aos-init" data-aos="flip-right" data-aos-delay="300">
										<div class="title">P/E (TTM)</div>
										<div class="number"> {{$myGlobalStuff.comanyinfo.ValuationData.PriceEarnings | twoDecimalPlaces }} </div>
									</div>
								</div>
							</div>

							<div class="col-md-3">
								<div class="circle circle2 aos-init" data-aos="zoom-out" data-aos-delay="400">
									<div class="fillin aos-init" data-aos="flip-right" data-aos-delay="500">
										<div class="title">P/E Before Unusual Items (TTM)</div>
										<div class="number">  {{$myGlobalStuff.comanyinfo.ValuationData.PriceEarningsBeforeUnusualItems | twoDecimalPlaces }}  </div>
									</div>
								</div>
							</div>


							<div class="col-md-3">
								<div class="circle circle3 aos-init" data-aos="zoom-out" data-aos-delay="600">
									<div class="fillin aos-init" data-aos="flip-right" data-aos-delay="700">
										<div class="title">P/BV</div>
										<div class="number"> {{$myGlobalStuff.comanyinfo.ValuationData.PricePerBook | twoDecimalPlaces }}  </div>
									</div>
								</div>
							</div>


							<div class="col-md-3">
								<div class="circle circle4 aos-init" data-aos="zoom-out" data-aos-delay="800">
									<div class="fillin aos-init" data-aos="flip-right" data-aos-delay="900">
										<div class="title">Dividend Yield</div>
										<div class="number">  </div>
										<div class="number"> {{$myGlobalStuff.comanyinfo.ValuationData.DividendYield | twoDecimalPlaces }} </div>
									</div>
								</div>
							</div>

						</div>

						<div class="row">
							<div class="col-md-12 offset-center">

								<div class="col-md-3">
									<div class="circle circle5 aos-init" data-aos="zoom-out" data-aos-delay="1000">
										<div class="fillin aos-init" data-aos="flip-right" data-aos-delay="1100">
											<div class="title">Market Cap. (M)</div>
											<div class="number"> {{$myGlobalStuff.comanyinfo.ValuationData.MarketCap | twoDecimalPlaces }} </div>
										</div>
									</div>
								</div>


								<div class="col-md-3">
									<div class="circle circle6 aos-init" data-aos="zoom-out" data-aos-delay="1200">
										<div class="fillin aos-init" data-aos="flip-right" data-aos-delay="1300">
											<div class="title">Return on Average Assets</div>
											<div class="number"> {{$myGlobalStuff.comanyinfo.ValuationData.ReturnOnAverageAssets | twoDecimalPlaces }} </div>
										</div>
									</div>
								</div>


								<div class="col-md-3">
									<div class="circle circle7 aos-init" data-aos="zoom-out" data-aos-delay="1400">
										<div class="fillin aos-init" data-aos="flip-right" data-aos-delay="1500">
											<div class="title">Return on Average Equity</div>
											<div class="number"> {{$myGlobalStuff.comanyinfo.ValuationData.ReturnOnAverageEquity | twoDecimalPlaces }}  </div>
										</div>
									</div>
								</div>

							</div>
						</div>


					</section>
				</div>
</template>
<script>
export default {
  name: 'section6'
}
</script>
