<template>
<div class="container-fluid relative bg-light-blue bg-img1">
					<section class="container sec2">
						<div class="row">
							<div class="col-md-6 col-md-offset-6 intro-text">
								<h3 data-aos="fade-up" v-html="$myGlobalStuff.comanyinfo.Overview.OverviewEn"></h3>
								<p data-aos="fade" data-aos-delay="500" v-html="$myGlobalStuff.comanyinfo.Overview.SummaryEn"></p>
								<p data-aos="fade" data-aos-delay="600"></p>
								<p data-aos="fade" data-aos-delay="700"></p>

							</div>
						</div>
					</section>
				</div>
</template>
<script>
export default {
  name: 'section2'
}
</script>
