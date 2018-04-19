<template>
<div class="container-fluid relative bg-light-gray bg-img3 " style="overflow: visible;">
					<section class="container sec4">
						<div class="row">

							<div class="col-lg-7 col-lg-push-5 col-md-6 cellpad text-white">

								<div class="cell item1 aos-init aos-animate" data-aos="flip-left" data-aos-delay="200">
									<svg class="svg-inline--fa fa-sync-alt fa-w-16 fa-2x" aria-hidden="true" data-prefix="fas" data-icon="sync-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"></path></svg><!-- <i class="fas fa-sync-alt fa-2x"></i> -->
									<p class="number counter-value" data-count="15038986">{{$myGlobalStuff.comanyinfo.FinancialHighlights.Revenue | twoDecimalPlaces }}</p>
									<p class="title"> Revenues </p>
								</div>
								<div class="cell item2 aos-init aos-animate" data-aos="flip-right" data-aos-delay="220">
									<svg class="svg-inline--fa fa-tree fa-w-12 fa-2x" aria-hidden="true" data-prefix="fas" data-icon="tree" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M377.33 375.429L293.906 288H328c21.017 0 31.872-25.207 17.448-40.479L262.79 160H296c20.878 0 31.851-24.969 17.587-40.331l-104-112.003c-9.485-10.214-25.676-10.229-35.174 0l-104 112.003C56.206 134.969 67.037 160 88 160h33.21l-82.659 87.521C24.121 262.801 34.993 288 56 288h34.094L6.665 375.429C-7.869 390.655 2.925 416 24.025 416H144c0 32.781-11.188 49.26-33.995 67.506C98.225 492.93 104.914 512 120 512h144c15.086 0 21.776-19.069 9.995-28.494-19.768-15.814-33.992-31.665-33.995-67.496V416h119.97c21.05 0 31.929-25.309 17.36-40.571z"></path></svg><!-- <i class="fas fa-tree fa-2x"></i> -->
									<p class="number counter-value" data-count="5029257">{{$myGlobalStuff.comanyinfo.FinancialHighlights.TotalIncome | twoDecimalPlaces }}</p>
									<p class="title"> Gross Income </p>
								</div>
								<div class="cell item3 aos-init" data-aos="flip-down" data-aos-delay="240">
									<svg class="svg-inline--fa fa-wrench fa-w-16 fa-2x" aria-hidden="true" data-prefix="fas" data-icon="wrench" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M481.156 200c9.3 0 15.12 10.155 10.325 18.124C466.295 259.992 420.419 288 368 288c-79.222 0-143.501-63.974-143.997-143.079C223.505 65.469 288.548-.001 368.002 0c52.362.001 98.196 27.949 123.4 69.743C496.24 77.766 490.523 88 481.154 88H376l-40 56 40 56h105.156zm-171.649 93.003L109.255 493.255c-24.994 24.993-65.515 24.994-90.51 0-24.993-24.994-24.993-65.516 0-90.51L218.991 202.5c16.16 41.197 49.303 74.335 90.516 90.503zM104 432c0-13.255-10.745-24-24-24s-24 10.745-24 24 10.745 24 24 24 24-10.745 24-24z"></path></svg><!-- <i class="fas fa-wrench fa-2x"></i> -->
									<p class="number counter-value" data-count="2936517">{{$myGlobalStuff.comanyinfo.FinancialHighlights.OperatingIncome | twoDecimalPlaces }}</p>
									<p class="title"> Operating Income	 </p>
								</div>
								<div class="cell item4 aos-init aos-animate" data-aos="flip-up" data-aos-delay="260">
									<svg class="svg-inline--fa fa-money-bill-alt fa-w-20 fa-2x" aria-hidden="true" data-prefix="far" data-icon="money-bill-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M320 144c-53.021 0-96 50.143-96 112 0 61.847 42.977 112 96 112 53 0 96-50.13 96-112 0-61.857-42.979-112-96-112zm48 164.428c0 7.477-3.917 11.572-11.572 11.572h-67.293c-7.656 0-11.573-4.095-11.573-11.572v-8.901c0-7.477 3.917-11.572 11.573-11.572h15.131v-39.878c0-5.163.534-10.503.534-10.503h-.356s-1.779 2.67-2.848 3.738c-4.451 4.273-10.504 4.451-15.666-1.068l-5.518-6.231c-5.342-5.341-4.984-11.216.534-16.379l21.72-19.939c4.449-4.095 8.366-5.697 14.42-5.697h12.105c7.656 0 11.75 3.916 11.75 11.572v84.384h15.488c7.655 0 11.572 4.094 11.572 11.572v8.902zM616 64H24C10.745 64 0 74.745 0 88v335c0 13.255 10.745 24 24 24h592c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM512 400H128c0-44.183-35.817-80-80-80V192c44.183 0 80-35.817 80-80h384c0 44.183 35.817 80 80 80v128c-44.183 0-80 35.817-80 80z"></path></svg><!-- <i class="far fa-money-bill-alt fa-2x"></i> -->
									<p class="number counter-value" data-count="1839747">{{$myGlobalStuff.comanyinfo.FinancialHighlights.NetIncome | twoDecimalPlaces }}</p>
									<p class="title"> Net Income </p>
								</div>
								<div class="cell item5 aos-init" data-aos="flip-left" data-aos-delay="280">
									<svg class="svg-inline--fa fa-pagelines fa-w-12 fa-2x" aria-hidden="true" data-prefix="fab" data-icon="pagelines" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M384 312.7c-55.1 136.7-187.1 54-187.1 54-40.5 81.8-107.4 134.4-184.6 134.7-16.1 0-16.6-24.4 0-24.4 64.4-.3 120.5-42.7 157.2-110.1-41.1 15.9-118.6 27.9-161.6-82.2 109-44.9 159.1 11.2 178.3 45.5 9.9-24.4 17-50.9 21.6-79.7 0 0-139.7 21.9-149.5-98.1 119.1-47.9 152.6 76.7 152.6 76.7 1.6-16.7 3.3-52.6 3.3-53.4 0 0-106.3-73.7-38.1-165.2 124.6 43 61.4 162.4 61.4 162.4.5 1.6.5 23.8 0 33.4 0 0 45.2-89 136.4-57.5-4.2 134-141.9 106.4-141.9 106.4-4.4 27.4-11.2 53.4-20 77.5 0 0 83-91.8 172-20z"></path></svg><!-- <i class="fab fa-pagelines fa-2x"></i> -->
									<p class="number counter-value" data-count="300000">{{$myGlobalStuff.comanyinfo.FinancialHighlights.AverageShares | twoDecimalPlaces }}</p>
									<p class="title"> Average Shares </p>
								</div>
								<div class="cell item6 aos-init aos-animate" data-aos="flip-right" data-aos-delay="300">
									<svg class="svg-inline--fa fa-envira fa-w-14 fa-2x" aria-hidden="true" data-prefix="fab" data-icon="envira" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 32c477.6 0 366.6 317.3 367.1 366.3L448 480h-26l-70.4-71.2c-39 4.2-124.4 34.5-214.4-37C47 300.3 52 214.7 0 32zm79.7 46c-49.7-23.5-5.2 9.2-5.2 9.2 45.2 31.2 66 73.7 90.2 119.9 31.5 60.2 79 139.7 144.2 167.7 65 28 34.2 12.5 6-8.5-28.2-21.2-68.2-87-91-130.2-31.7-60-61-118.6-144.2-158.1z"></path></svg><!-- <i class="fab fa-envira fa-2x"></i> -->
									<p class="number counter-value" data-count="6.13">{{$myGlobalStuff.comanyinfo.FinancialHighlights.EarningsPerShare | twoDecimalPlaces }}</p>
									<p class="title"> EPS (SAR) </p>
								</div>
							</div>

							<div class="col-lg-5 col-lg-pull-7 col-md-6  ">
								<div class="ptitle">
									<h3 class="text-blue aos-init aos-animate" data-aos="fade-left">
										{{$myGlobalStuff.comanyinfo.FinancialReport.ReportPageTitle}}
									</h3>
									<p class="text-gray aos-init aos-animate" data-aos="fade" data-aos-delay="100" v-html="$myGlobalStuff.comanyinfo.FinancialReport.Section1Text"></p>
									<p class="text-gray aos-init" data-aos="fade" data-aos-delay="300" v-html="$myGlobalStuff.comanyinfo.FinancialReport.Section2Text"></p>
									<p class="text-gray aos-init" data-aos="fade" data-aos-delay="500"v-html="$myGlobalStuff.comanyinfo.FinancialReport.Section3Text"></p>
									<p class="text-gray aos-init" data-aos="fade" data-aos-delay="700"></p>
								</div>
							</div>

						</div>
					</section>
				</div>
</template>
<script>
export default {
  name: 'section3',
}
</script>
