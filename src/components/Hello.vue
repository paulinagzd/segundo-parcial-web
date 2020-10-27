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
          <!--<p class="display-6 color-d">Hello, world!</p>-->
          <h1 class="intro-title mb-4">Paulina González Dávalos</h1>
          <p class="intro-subtitle"><span class="text-slider-items">CEO DevFolio,Web Developer,Web Designer,Frontend Developer,Graphic Designer</span><strong class="text-slider"></strong></p>
          <!-- <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> -->
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
                      <div>
                        <h4>Instituto Tecnológico de Estudios Superiores de Monterrey (ITESM)</h4>
                        <p class="lead">
                          ‣ Bachelor in Computer Science and Software Engineering <br>
                          ‣ GPA 87/100
                        </p>
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
                  <div>
                    <div class="row">
                      <div class="col-md-8">
                        <h4>Ecaresoft | Junior Product Manager</h4>
                        <p class="lead">
                          ‣ Research for a digital tool that consists of helping ensure optimal allocation of healthcare resources, considering the client, business, and the technological area of the product to deliver better user guides.
                        </p>
                      </div>
                      <div class="col-md-2"></div>
                      <div class="col-md-2 text-right"> <p class="lead"> 2020 </p>
                    </div>
                  </div>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-md-8">
                        <h4>UBER | High-Capacity Matching | Software Engineering Intern</h4>
                        <p class="lead">
                          ‣ Developed an internal tool using flow-typed JavaScript with React, Redux, and proprietary company services. <br>
                          ‣ Implemented a system design process in the development of the above tool to improve communication with stakeholders.
                        </p>
                      </div>
                      <div class="col-md-2"></div>
                      <div class="col-md-2 text-right"> <p class="lead">Summer 2020 </p>
                    </div>
                  </div>
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-md-8">
                        <h4>NOWPORTS (Y Combinator, Winter 2019 batch) | Software Engineering Intern</h4>
                        <p class="lead">
                          ‣ Developed new features and gave maintenance to web applications for customers, administrators, and internal departments such as sales and pricing through APIs and technologies like React, Redux, and NodeJS. <br>
                          ‣ Developed internal front-end libraries to ensure consistency and promote code reusability across the NOWPORTS codebase.
                        </p>
                      </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-2 text-right"> <p class="lead"> 2019-2020 </p>
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
                  <div>
                    <div class="row">
                      <div class="col-md-8">
                        <h4>Mayúsculas, iOS App Project | Software Developer</h4>
                        <p class="lead">
                          Designed, prototyped, and developed an educational app for ITESM’s literature department written in Swift. <br>
                          Coming soon to the App Store (expected late 2020 to early 2021)
                        </p>
                      </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-2 text-right"> <p class="lead"> 2020 </p>
                    </div>
                    </div>
                  </div>

                  <div>
                    <div class="row">
                      <div class="col-md-8">
                        <h4>For The Love Of Tea, Google CodeU Program | Participant</h4>
                        <p class="lead">
                          ‣ Collaborated with a team of peers to design and implement a web application using Java, JavaScript, HTML and CSS for 10 weeks, leveraging various Google Cloud Platform APIs, including App Engine and Datastore. <br>
                          ‣ Practiced industry best practices such as: contributing to open-source software using Git and GitHub, conducting code reviews with/for teammates, extending an existing codebase, and designing new components leading them to completion.
                        </p>
                      </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-2 text-right"> <p class="lead"> 2019 </p>
                    </div>
                    </div>
                  </div>

                  <div>
                    <div class="row">
                      <div class="col-md-8">
                        <h4>Answer Quest, Video Game Development | Software Developer</h4>
                        <p class="lead">
                          ‣ Developed an educational video game in Java that was operated by a fully functioning, secure, and manageable database with a team of peers. <br>
                          ‣ Created and designed the storyboard and prototypes after doing research with the team and a professional in special education, coming up with an additional well-designed administrator interface made in Java and MySQL.
                        </p>
                      </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-2 text-right"> <p class="lead"> 2019 </p>
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
                  <div>
                    <div class="row">
                      <div class="col-sm-3 col-md-3">
                        <img src="../assets/img/wit.png" class="img-fluid b-shadow-a rounded-img" style="border-radius=50%" alt="">
                      </div>
                      <div class="col-md-6">
                        <h4>President | Women in Technology at ITESM (WIT)</h4>
                        <p class="lead">
                          ‣ WIT is a student chapter whose mission is to create a community committed to the empowerment of all women in STEM; connecting, developing, and networking with female talent.
                        </p>
                      </div>
                    <div class="col-md-2 text-right"> <p class="lead"> 2020 </p>
                    </div>
                    </div>
                  </div>

                  <div>
                    <div class="row">
                      <div class="col-sm-3 col-md-3">
                        <img src="../assets/img/twitter.png" class="img-fluid b-shadow-a rounded-img" style="border-radius=50%" alt="">
                      </div>
                      <div class="col-md-6">
                        <h4>Twitter’s #DevelopHER</h4>
                        <p class="lead">
                          ‣ One of 38 attendees selected out of 1,000+ applicants to attend a two-day interactive program for second-year computer science majors focused on professional and technical development including networking, personal branding, resume writing and code challenges.                        </p>
                      </div>
                    <div class="col-md-2 text-right"> <p class="lead"> 2019 </p>
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
                <div>
                  <div class="row">
                    <div class="col-md-12">
                      <p class="lead">
                        ‣ Coordinator of communication in ITESM’s CS & software engineering student society
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="row">
                    <div class="col-md-12">
                      <p class="lead">
                        ‣ Translated, conducted, and coordinated on-air interviews for Mexico’s largest radio station EXA FM
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="row">
                    <div class="col-md-12">
                      <p class="lead">
                        ‣ Taught the basics of Python to middle school students during a 2-week course
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="row">
                    <div class="col-md-12">
                      <p class="lead">
                       ‣ Spoken Languages: Spanish (native), English (fluent), and German (Goethe B1 Certificate)
                      </p>
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
  },
};
</script>