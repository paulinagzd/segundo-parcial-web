<template>
  <div>
   <nav class="navbar navbar-light navbar-expand-sm" style="background-color: #ffd1dc;">
      <a class="navbar-brand" href="#">></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#education">Education <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#pd">Professional Development</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#other">Extracurricular Activities</a>
          </li>
        </ul>
      </div>
    </nav>

      <!-- ======= Intro Section ======= -->
  <div id="home" class="intro route bg-image" v-bind:style="cssProps">
    <div class="overlay-itro"></div>
    <div class="intro-content display-table">
      <div class="table-cell">
        <div class="container">
          <h1 class="intro-title mb-4">Paulina González Dávalos</h1>
          <p class="intro-subtitle"><span class="text-slider-items">CEO DevFolio,Web Developer,Web Designer,Frontend Developer,Graphic Designer</span><strong class="text-slider"></strong></p>
        </div>
      </div>
    </div>
  </div><!-- End Intro Section -->
      <!-- ======= Education ======= -->
    <section id="about" class="about-mf sect-pt4 route" v-bind:style="{'background-color': '#ffd1dc'}">
      <div class="container" >
        <div class="row" id="education">
          <div class="col-sm-12">
            <div class="box-shadow-full">
              <div class="row">
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-sm-3 col-md-2">

                    </div>
                    <div class="col-sm-6 col-md-7">
                      <div class="about-info">
                        <img src="../assets/img/linkedin.jpg" class="img-fluid b-shadow-a rounded-img" style="border-radius=50%" alt="">
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
                    <div v-for="post in posts" :key="post.id">
                      <div v-if="post.area === 'Education'">
                        <h4>{{post.title}}</h4>
                        <p class="lead">
                          {{post.body}}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End About Section -->
    <!-- ======= Experience EXPERIENCE Section ======= -->
    <section id="about" class="about-mf sect-pt4 route" v-bind:style="{'background-color': '#ffd1dc'}">
      <div class="container" id="experience">
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
                    <div class="col-md-2 text-right"> <p class="lead"> {{post.year}} </p>
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

    <!-- ======= MAJOR PROJECTS Section ======= -->
    <section id="about" class="about-mf sect-pt4 route" v-bind:style="{'background-color': '#ffd1dc'}">
      <div class="container" id="projects">
        <div class="row">
          <div class="col-sm-12">
            <div class="box-shadow-full">
              <div class="row">
                <div class="title-box-2">
                  <h5 class="title-left">
                    Projects
                  </h5>
                </div>
                <div v-for="post in posts" :key="post.id" class="about-me pt-4 pt-md-0">
                  <div v-if="post.area === 'Project'">
                    <div class="row">
                      <div class="col-md-8">
                        <h4>{{post.title}}</h4>
                        <p class="lead">
                          {{post.body}}
                        </p>
                      </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-2 text-right"> <p class="lead"> {{post.year}} </p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End MAJOR PROJECTS Section -->

        <!-- ======= PROFESSIONAL DEVELOPMENT Section ======= -->
    <section id="about" class="about-mf sect-pt4 route" v-bind:style="{'background-color': '#ffd1dc'}">
      <div class="container" id="pd">
        <div class="row">
          <div class="col-sm-12">
            <div class="box-shadow-full">
              <div class="row">
                <div class="title-box-2">
                  <h5 class="title-left">
                    Professional Development
                  </h5>
                </div>
                <div v-for="post in posts" :key="post.id" class="about-me pt-4 pt-md-0">
                  <div v-if="post.area === 'PD'">
                    <div class="row">
                      <div class="col-sm-3 col-md-3">
                        <img v-if="post.title === 'President | Women in Technology at ITESM (WIT)'" src="../assets/img/wit.png" class="img-fluid b-shadow-a rounded-img" style="border-radius=50%" alt="">
                        <img v-else src="../assets/img/twitter.png" class="img-fluid b-shadow-a rounded-img" style="border-radius=50%" alt="">
                      </div>
                      <div class="col-md-6">
                        <h4>{{post.title}}</h4>
                        <p class="lead">
                          {{post.body}}
                        </p>
                      </div>
                    <div class="col-md-2 text-right"> <p class="lead"> {{post.year}} </p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End PROFESSIONAL DEVELOPMENT Section -->

    <!-- ======= OTHER Section ======= -->
    <section id="about" class="about-mf sect-pt4 route" v-bind:style="{'background-color': '#ffd1dc'}">
      <div class="container" id="other">
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
                      <div class="col-md-12">
                        <p class="lead">
                          {{post.body}}
                        </p>
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
    <ScrollTopArrow></ScrollTopArrow>
  </div>
</template>

<style>
  @import '../assets/css/style.css';
</style>


<script>
import api from '@/api';
import ScrollTopArrow from '@/components/Arrow';

export default {
    components: {
    ScrollTopArrow
  },
  data() {
    return {
      visible: false,
      loading: false,
      posts: [],
      model: {},
      cssProps: {
          backgroundImage: `url(${require('../assets/img/andromeda.png')})`
      },
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
  }
};
</script>