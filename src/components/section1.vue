<template >
<div class="container-fluid" >
					<section class="container sec1">
						<div class="ProfileImg pull-left">
							<img src="../assets/images/logo1.png" alt="">
						</div>
						<div class="ProfileName pull-left">
							<h1 class="text-gray" data-aos="fade-left" >  {{$myGlobalStuff.comanyinfo.CompanyHeader.CompanyNameEn}} </h1>
							<h3 class="reportName">
								<span class="value" :class="$myGlobalStuff.comanyinfo.CompanyHeader.Price | colorclass " data-aos="fade" data-aos-delay="200">{{$myGlobalStuff.comanyinfo.CompanyHeader.Price | twoDecimalPlaces  | negative }}</span>
								<span class="shares-up">
									<span class="direction " :class="$myGlobalStuff.comanyinfo.CompanyHeader.PercentageChange | GetImageDirectionClass "  data-aos="fade" data-aos-delay="300">
										<i class="glyphicon glyphicon-circle-arrow-up"></i>
									</span>
									<span class="amount" :class="$myGlobalStuff.comanyinfo.CompanyHeader.Change | colorclass " data-aos="fade" data-aos-delay="400">{{$myGlobalStuff.comanyinfo.CompanyHeader.Change | twoDecimalPlaces | negative }} </span>
									<span class="percent" :class="$myGlobalStuff.comanyinfo.CompanyHeader.PercentageChange | colorclass " data-aos="fade" data-aos-delay="500">{{$myGlobalStuff.comanyinfo.CompanyHeader.PercentageChange | twoDecimalPlaces | negative }}%</span>
								</span>

							</h3>
						</div>
						<div class="mega-year" data-aos="slide-down" data-aos-delay="300">2017</div>
					</section>
				</div>
</template>
<script>
export default {
  name: 'section1'
}
</script>
