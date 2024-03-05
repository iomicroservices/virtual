<script setup lang="ts">
interface Props {
  path: string
  title: string
  q1: string
  a1: string
  q2: string
  a2: string
  q3: string
  a3: string
  q4: string
  a4: string
  q5: string
  a5: string
  q6: string
  a6: string
  q7: string
  a7: string
  q8: string
  a8: string
  q9: string
  a9: string
  q10: string
  a10: string
  q11: string
  a11: string
  q12: string
  a12: string
  q13: string
  a13: string
  q14: string
  a14: string
  q15: string
  a15: string
  q16: string
  a16: string
  q17: string
  a17: string
  q18: string
  a18: string
}

withDefaults(defineProps<Props>(), {
  path: '/',
  badge: 'badge',
  title: 'no-title',
  description: 'no-description',
  image: '/blogs-img/blog.jpg',
  alt: 'no-alt',
  ogImage: '/blogs-img/blog.jpg',
  button1: 'button-1',
  button1href: '/contact',
  q1: 'question',
  a1: 'answer',
  q2: 'question',
  a2: 'answer',
  q3: 'question',
  a3: 'answer',
  q4: 'question',
  a4: 'answer',
  q5: 'question',
  a5: 'answer',
  q6: 'question',
  a6: 'answer',
  q7: 'question',
  a7: 'answer',
  q8: 'question',
  a8: 'answer',
  q9: 'question',
  a9: 'answer',
  q10: 'question',
  a10: 'answer',
  q11: 'question',
  a11: 'answer',
  q12: 'question',
  a12: 'answer',
  q13: 'question',
  a13: 'answer',
  q14: 'question',
  a14: 'answer',
  q15: 'question',
  a15: 'answer',
  q16: 'question',
  a16: 'answer',
  q17: 'question',
  a17: 'answer',
  q18: 'question',
  a18: 'answer',
})
</script>

<template>
    
<!-- =======================
Faq START -->
<section class="pt-0">
	<div class="container">
		<!-- Title -->
		<div class="inner-container-small text-center mb-4 mb-sm-6">
			<h2>{{ title }}</h2>
		</div>
		<div class="row">
			<div class="col-md-10 mx-auto">
				<!-- Accordion START -->
				<div class="accordion accordion-icon accordion-border" id="accordionFaq">
					<!-- Item -->
					<div class="accordion-item mb-3">
						<div class="accordion-header font-base" id="heading-1">
							<button class="accordion-button fw-semibold rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
								{{ q1 }}
							</button>
						</div>
						<!-- Body -->
						<div id="collapse-1" class="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#accordionFaq">
							<div class="accordion-body mt-3 pb-0">
								{{ a1 }}
							</div>
						</div>
					</div>

					<!-- Item -->
					<div class="accordion-item mb-3">
						<div class="accordion-header font-base" id="heading-2">
							<button class="accordion-button fw-semibold rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
								{{ q2 }}
							</button>
						</div>
						<!-- Body -->
						<div id="collapse-2" class="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#accordionFaq">
							<div class="accordion-body mt-3">
								{{ a2 }}
							</div>
						</div>
					</div>

					<!-- Item -->
					<div class="accordion-item mb-3">
						<div class="accordion-header font-base" id="heading-3">
							<button class="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
								{{ q3 }}
							</button>
						</div>
						<!-- Body -->
						<div id="collapse-3" class="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#accordionFaq">
							<div class="accordion-body mt-3">
								{{ a3 }}
							</div>
						</div>
					</div>

					<!-- Item -->
					<div class="accordion-item mb-3">
						<div class="accordion-header font-base" id="heading-4">
							<button class="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
								{{ q4 }}
							</button>
						</div>
						<!-- Body -->
						<div id="collapse-4" class="accordion-collapse collapse" aria-labelledby="heading-4" data-bs-parent="#accordionFaq">
							<div class="accordion-body mt-3">
								{{ a4 }}
							</div>
						</div>
					</div>

					<!-- Item -->
					<div class="accordion-item mb-3">
						<div class="accordion-header font-base" id="heading-5">
							<button class="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
								{{ q5 }}
							</button>
						</div>
						<!-- Body -->
						<div id="collapse-5" class="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#accordionFaq">
							<div class="accordion-body mt-3">
								{{ a5 }}
							</div>
						</div>
					</div>

					<!-- Item -->
					<div class="accordion-item mb-3">
						<div class="accordion-header font-base" id="heading-6">
							<button class="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">
								{{ q6 }}
							</button>
						</div>
						<!-- Body -->
						<div id="collapse-6" class="accordion-collapse collapse" aria-labelledby="heading-6" data-bs-parent="#accordionFaq">
							<div class="accordion-body mt-3">
								{{ a6 }}
							</div>
						</div>
					</div>
					<!-- Item -->
					<div class="accordion-item mb-3">
						<div class="accordion-header font-base" id="heading-7">
							<button class="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7">
								{{ q7 }}
							</button>
						</div>
						<!-- Body -->
						<div id="collapse-7" class="accordion-collapse collapse" aria-labelledby="heading-7" data-bs-parent="#accordionFaq">
							<div class="accordion-body mt-3">
								{{ a7 }}
							</div>
						</div>
					</div>
					<!-- Item -->
					<div class="accordion-item mb-3">
						<div class="accordion-header font-base" id="heading-8">
							<button class="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-8" aria-expanded="false" aria-controls="collapse-8">
								{{ q8 }}
							</button>
						</div>
						<!-- Body -->
						<div id="collapse-8" class="accordion-collapse collapse" aria-labelledby="heading-8" data-bs-parent="#accordionFaq">
							<div class="accordion-body mt-3">
								{{ a8 }}
							</div>
						</div>
					</div>
					<!-- Item -->
					<div class="accordion-item mb-3">
						<div class="accordion-header font-base" id="heading-9">
							<button class="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-9" aria-expanded="false" aria-controls="collapse-9">
								{{ q9 }}
							</button>
						</div>
						<!-- Body -->
						<div id="collapse-9" class="accordion-collapse collapse" aria-labelledby="heading-9" data-bs-parent="#accordionFaq">
							<div class="accordion-body mt-3">
								{{ a9 }}
							</div>
						</div>
					</div>
					<!-- Item -->
					<div class="accordion-item mb-3">
						<div class="accordion-header font-base" id="heading-10">
							<button class="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-10" aria-expanded="false" aria-controls="collapse-10">
								{{ q10 }}
							</button>
						</div>
						<!-- Body -->
						<div id="collapse-10" class="accordion-collapse collapse" aria-labelledby="heading-10" data-bs-parent="#accordionFaq">
							<div class="accordion-body mt-3">
								{{ a10 }}
							</div>
						</div>
					</div>
					<!-- Item -->
					<div class="accordion-item mb-3">
						<div class="accordion-header font-base" id="heading-11">
							<button class="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-11" aria-expanded="false" aria-controls="collapse-11">
								{{ q11 }}
							</button>
						</div>
						<!-- Body -->
						<div id="collapse-11" class="accordion-collapse collapse" aria-labelledby="heading-11" data-bs-parent="#accordionFaq">
							<div class="accordion-body mt-3">
								{{ a11 }}
							</div>
						</div>
					</div>
					<!-- Item -->
					<div class="accordion-item mb-3">
						<div class="accordion-header font-base" id="heading-12">
							<button class="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-12" aria-expanded="false" aria-controls="collapse-12">
								{{ q12 }}
							</button>
						</div>
						<!-- Body -->
						<div id="collapse-12" class="accordion-collapse collapse" aria-labelledby="heading-12" data-bs-parent="#accordionFaq">
							<div class="accordion-body mt-3">
								{{ a12 }}
							</div>
						</div>
					</div>
					<!-- Item -->
					<div class="accordion-item mb-3">
						<div class="accordion-header font-base" id="heading-13">
							<button class="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-13" aria-expanded="false" aria-controls="collapse-13">
								{{ q13 }}
							</button>
						</div>
						<!-- Body -->
						<div id="collapse-13" class="accordion-collapse collapse" aria-labelledby="heading-13" data-bs-parent="#accordionFaq">
							<div class="accordion-body mt-3">
								{{ a13 }}
							</div>
						</div>
					</div>
					<!-- Item -->
					<div class="accordion-item mb-3">
						<div class="accordion-header font-base" id="heading-14">
							<button class="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-14" aria-expanded="false" aria-controls="collapse-14">
								{{ q14 }}
							</button>
						</div>
						<!-- Body -->
						<div id="collapse-14" class="accordion-collapse collapse" aria-labelledby="heading-14" data-bs-parent="#accordionFaq">
							<div class="accordion-body mt-3">
								{{ a14 }}
							</div>
						</div>
					</div>
					<!-- Item -->
					<div class="accordion-item mb-3">
						<div class="accordion-header font-base" id="heading-15">
							<button class="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-15" aria-expanded="false" aria-controls="collapse-15">
								{{ q15 }}
							</button>
						</div>
						<!-- Body -->
						<div id="collapse-15" class="accordion-collapse collapse" aria-labelledby="heading-15" data-bs-parent="#accordionFaq">
							<div class="accordion-body mt-3">
								{{ a15 }}
							</div>
						</div>
					</div>
					<!-- Item -->
					<div class="accordion-item mb-3">
						<div class="accordion-header font-base" id="heading-16">
							<button class="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-16" aria-expanded="false" aria-controls="collapse-16">
								{{ q16 }}
							</button>
						</div>
						<!-- Body -->
						<div id="collapse-16" class="accordion-collapse collapse" aria-labelledby="heading-16" data-bs-parent="#accordionFaq">
							<div class="accordion-body mt-3">
								{{ a16 }}
							</div>
						</div>
					</div>
					<!-- Item -->
					<div class="accordion-item mb-3">
						<div class="accordion-header font-base" id="heading-17">
							<button class="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-17" aria-expanded="false" aria-controls="collapse-17">
								{{ q17 }}
							</button>
						</div>
						<!-- Body -->
						<div id="collapse-17" class="accordion-collapse collapse" aria-labelledby="heading-17" data-bs-parent="#accordionFaq">
							<div class="accordion-body mt-3">
								{{ a17 }}
							</div>
						</div>
					</div>
					<!-- Item -->
					<div class="accordion-item mb-3">
						<div class="accordion-header font-base" id="heading-18">
							<button class="accordion-button fw-semibold collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-18" aria-expanded="false" aria-controls="collapse-18">
								{{ q18 }}
							</button>
						</div>
						<!-- Body -->
						<div id="collapse-18" class="accordion-collapse collapse" aria-labelledby="heading-18" data-bs-parent="#accordionFaq">
							<div class="accordion-body mt-3">
								{{ a18 }}
							</div>
						</div>
					</div>

				</div>
				<!-- Accordion END -->
			</div>
		</div>
	</div>
</section>
<!-- =======================
Faq END -->
</template>