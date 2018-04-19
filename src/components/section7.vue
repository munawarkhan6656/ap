<template>
<div class="container-fluid relative" style="margin-top: 20px;">
					<section class="container sec7">

						 <!--<div class="row">
							<div class="text-center">
								<div class="ptitle">
									<h3 class="text-blue" data-aos="zoom-out">  Board & Management </h3>
									<p class="text-gray"> consectetur adipisicing elit, sed do.</p>
								</div>
							</div>
							<hr>
						 </div>-->

	<!-- chairman start  -->
 						<div class="row chairman" v-for="chairman  in $myGlobalStuff.comanyinfo.BoardMembers">

 								<div class="col-md-8 col-md-offset-2 chman aos-init aos-animate" data-aos="fade-down" v-if="chairman.PositionNameEn == 'Chairman of the Board'">
 									<!-- card  -->
									<div class="card col-md-5 aos-init" data-aos="flip-down" data-aos-delay="300">
										<div class="img" :style="{ 'background-image': 'url('+chairman.ProfilePicURL+')'}"><!--img--></div>
									</div>
									<!-- about -->
									<div class="info col-md-7">
										<div>
											<h2 class="text-blue aos-init" data-aos="zoom-out" data-aos-delay="200"> {{chairman.NameEn}} </h2>
											<h4 data-aos="fade-left" data-aos-delay="300" class="aos-init"> {{chairman.PositionNameEn}}  </h4>
										</div>
										<hr>
										<!-- about  -->
										<div class="about">
											<h4 data-aos="fade-up" data-aos-delay="300" class="aos-init"> Highlights </h4>
											<p data-aos="fade-up" data-aos-delay="400" class="aos-init" v-html="chairman.ResumeHighLightEn"></p>
										</div>
									</div>
 								</div>

						</div>
	<!-- chairman end  -->
						 <div class="row structure">

					<!-- card 1 start-->
								<div class="col-lg-3 col-md-6 aos-init" data-aos="flip-left" data-aos-anchor-placement="top-center" v-for="chairman  in $myGlobalStuff.comanyinfo.BoardMembers" v-if="chairman.PositionNameEn != 'Chairman of the Board'" >
								 <div class="card">
										<div class="info text-white aos-init" data-aos="fade-down" data-aos-delay="100">
											<h3>{{chairman.NameEn}}</h3>
											<h5>{{chairman.PositionNameEn}}</h5>
										</div>
									 <div class="img" :style="{ 'background-image': 'url('+chairman.ProfilePicURL+')'}"><!--img--></div>
								 </div>
							 </div>
          <!-- card 1 end -->
						 </div>


						</section>
				</div>
</template>
<script>
export default {
  name: 'section7'
}
</script>
