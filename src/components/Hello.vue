<template>
  <div>
      <!-- ======= Intro Section ======= -->
  <div id="home" class="intro route bg-image" style="background-image: url(assets/img/intro-bg.jpg)">
    <div class="overlay-itro"></div>
    <div class="intro-content display-table">
      <div class="table-cell">
        <div class="container">
          <!--<p class="display-6 color-d">Hello, world!</p>-->
          <h1 class="intro-title mb-4">Paulina González Dávalos</h1>
          <p class="intro-subtitle"><span class="text-slider-items">CEO DevFolio,Web Developer,Web Designer,Frontend Developer,Graphic Designer</span><strong class="text-slider"></strong></p>
          <!-- <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> -->
        </div>
      </div>
    </div>
  </div><!-- End Intro Section -->
      <!-- ======= Education ======= -->
    <section id="about" class="about-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="box-shadow-full">
              <div class="row">
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-sm-6 col-md-5">
                      <div class="about-img">
                        <img src="assets/img/testimonial-2.jpg" class="img-fluid rounded b-shadow-a" alt="">
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-7">
                      <div class="about-info">
                        <p><span class="title-s">Name: </span> <span>Morgan Freeman</span></p>
                        <p><span class="title-s">Profile: </span> <span>full stack developer</span></p>
                        <p><span class="title-s">Email: </span> <span>contact@example.com</span></p>
                        <p><span class="title-s">Phone: </span> <span>(617) 557-0089</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="about-me pt-4 pt-md-0">
                    <div class="title-box-2">
                      <h5 class="title-left">
                        Education
                      </h5>
                    </div>
                    <p class="lead">
                      Monterrey Institute Of Technology and Higher Education
                    </p>
                    <p class="lead">
                      Graduation expected Spring 2022
                    </p>
                    <p class="lead">
                      GPA 87/100
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End About Section -->
    <!-- ======= Experience EXPERIENCE Section ======= -->
    <section id="about" class="about-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="box-shadow-full">
              <div class="row">
                <div class="title-box-2">
                  <h5 class="title-left">
                    Experience
                  </h5>
                </div>
                <div v-for="post in posts" :key="post.id" class="about-me pt-4 pt-md-0">
                  <div v-if="post.area === 'Experience'">
                    <div class="row">
                      <div class="col-md-8">
                        <h4>{{post.title}}</h4>
                        <p class="lead">
                          {{post.body}}
                        </p>
                      </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-2"> <p class="lead"> {{post.year}} </p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End Experience EXPERIENCE Section -->

    <!-- ======= OTHER Section ======= -->
    <section id="about" class="about-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="box-shadow-full">
              <div class="row">
                <div class="title-box-2">
                  <h5 class="title-left">
                    Extracurricular Activities 
                  </h5>
                </div>
                <div v-for="post in posts" :key="post.id" class="about-me pt-4 pt-md-0">
                  <div v-if="post.area === 'Other'">
                    <div class="row">
                      <div class="col-md-8">
                        <p class="lead">
                          {{post.body}}
                        </p>
                      </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-2"> <p class="lead"> {{post.year}} </p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End OTHER Section -->
  </div>
</template>

<style>
  @import '../assets/css/style.css';
</style>


<script>
import api from '@/api';

export default {
  data() {
    return {
      loading: false,
      posts: [],
      model: {},
    };
  },
  async created() {
    this.refreshPosts();
  },
  methods: {
    async refreshPosts() {
      this.loading = true;
      this.posts = await api.getPosts();
      this.loading = false;
    },
    async populatePostToEdit(post) {
      this.model = Object.assign({}, post);
    },
    async savePost() {
      if (this.model.id) {
        await api.updatePost(this.model.id, this.model);
      } else {
        await api.createPost(this.model);
      }
      this.model = {}; // reset form
      await this.refreshPosts();
    },
    async deletePost(id) {
      if (confirm('Are you sure you want to delete this post?')) {
        // if we are editing a post we deleted, remove it from the form
        if (this.model.id === id) {
          this.model = {};
        }
        await api.deletePost(id);
        await this.refreshPosts();
      }
    },
  },
};
</script>