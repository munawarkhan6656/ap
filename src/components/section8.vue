<template>
<div class="container-fluid relative bg-light-blue bg-img8">
						<section class="container sec8">
								<div class="row">

									 <div class="col-lg-8 col-lg-push-4 col-md-12 text-center ">
											<a v-bind:href="$myGlobalStuff.urlAReport" target="_blank" class="psd-link pull-right aos-init aos-animate" data-aos="fade" data-aos-delay="100">
												<img src="../assets/images/pdf.png" class="icon-link pull-left">
												<div class="text-left text-link pull-left">
													<b> Download </b><br>
													<span><small> Our Annual Report </small></span>
												</div>
											</a>

											<a v-bind:href="$myGlobalStuff.urlFinanicalReport" target="_blank" class="psd-link pull-right aos-init aos-animate" data-aos="fade" data-aos-delay="200">
												<img src="../assets/images/pdf.png" class="icon-link pull-left">
												<div class="text-left text-link pull-left">
													<b> Download </b><br>
													<span><small>Financial Report</small></span>
												</div>
											</a>
									</div>

									<div class="col-lg-4 col-lg-pull-8 copyright">
										<p>Copyrights © 2018, SABIC Corp.</p>
										<p>Powered By: argaam </p>
									 </div>


								</div>
						</section>
				</div>
</template>
<script>
export default {
  name: 'section8'
}
</script>
