<template>
  <div>
    <v-card class="my-4" style="background-color:  #48aaf912;">
      <v-card-title class="d-flex justify-center text-center">
        <p class="my-0 heading" style="width: 100%; color: #ec2027;">
          Diani Sunrise Estate
        </p>
      </v-card-title>

      <v-row class="no-gutters">
        <v-col class="col-12 py-2">
          <span
            class="pointer"
            style="
                      position: absolute;
                      top: 35%;
                      left: 5%;
                      z-index: 99;
                  "
            @click="previousPhoto"
          >
            <v-icon class="rounded grey">
              mdi-arrow-left
            </v-icon>
          </span>
          <v-img
            v-if="img_source == '0.png'"
            class="rounded lighten-4 mx-1"
            contain
            :src="require(`@/assets/diani_sunrise/0.png`)"
          />
          <v-img
            v-if="img_source == '1.png'"
            class="rounded lighten-4 mx-1"
            contain
            :src="require(`@/assets/diani_sunrise/1.png`)"
          />
          <v-img
            v-if="img_source == '2.png'"
            class="rounded lighten-4 mx-1"
            contain
            :src="require(`@/assets/diani_sunrise/2.png`)"
          />
          <v-img
            v-if="img_source == '3.png'"
            class="rounded lighten-4 mx-1"
            contain
            :src="require(`@/assets/diani_sunrise/3.png`)"
          />
          <v-img
            v-if="img_source == '4.png'"
            class="rounded lighten-4 mx-1"
            contain
            :src="require(`@/assets/diani_sunrise/4.png`)"
          />
          <span
            class="pointer"
            style="
                      position: absolute;
                      top: 35%;
                      right: 5%;
                  "
            @click="nextPhoto"
          >
            <v-icon class="rounded grey">
              mdi-arrow-right
            </v-icon>
          </span>
        </v-col>
        <v-col class="col-12 d-flex justify-center ">
          <v-img
            class="rounded mx-1"
            :class="{
              'red': img_source == '0.png'
            }"
            contain
            :width="30"
            :height="20"
            :src="require(`@/assets/diani_sunrise/0.png`)"
            @click="changeSource('sunrise_0')"
          />
          <v-img
            class="rounded mx-1"
            :class="{
              'red': img_source == '1.png'
            }"
            contain
            :width="30"
            :height="20"
            :src="require(`@/assets/diani_sunrise/1.png`)"
            @click="changeSource('1')"
          />
          <v-img
            class="rounded mx-1"
            :class="{
              'red': img_source == '2.png'
            }"
            contain
            :width="30"
            :height="20"
            :src="require(`@/assets/diani_sunrise/2.png`)"
            @click="changeSource('2')"
          />
          <v-img
            class="rounded mx-1"
            :class="{
              'red': img_source == '3.png'
            }"
            contain
            :width="30"
            :height="20"
            :src="require(`@/assets/diani_sunrise/3.png`)"
            @click="changeSource('3')"
          />
          <v-img
            class="rounded mx-1"
            :class="{
              'red': img_source == '4.png'
            }"
            contain
            :width="30"
            :height="20"
            :src="require(`@/assets/diani_sunrise/4.png`)"
            @click="changeSource('4')"
          />
        </v-col>
        <v-col class="col-12 px-4 text--bold" style="font-weight: 900;">
          <h3 class="d-flex align-center mr-2">
            <v-icon small class="red--text">
              mdi-pin
            </v-icon>
            Diani
          </h3>
          <h5 class="d-flex">
            <v-icon x-small class="green--text mx-1">
              mdi-circle
            </v-icon>
            {{ "Value Added - Fenced and Gated." }}
          </h5>

          <h5 class="d-flex">
            <v-icon x-small class="green--text mx-1">
              mdi-circle
            </v-icon>
            {{ "1Km off Lungalunga Highway." }}
          </h5>

          <h5 class="d-flex">
            <v-icon x-small class="green--text mx-1">
              mdi-circle
            </v-icon>
            {{ "4KM to the Diani Whitesands Beach." }}
          </h5>

          <h5 class="d-flex">
            <v-icon x-small class="green--text mx-1">
              mdi-circle
            </v-icon>
            {{ "7KM to Ukunda Airstrip." }}
          </h5>

          <h5 class="d-flex">
            <v-icon x-small class="green--text mx-1">
              mdi-circle
            </v-icon>
            {{ "Near Diani 5-Star Hotels." }}
          </h5>
        </v-col>
        <v-col class="col-12 d-flex px-4">
          <v-col class="col-5 offset-1">
            <span class="d-flex mr-2 cta tex-center d-flex justify-center align-center red rounded white--text">
              <span class="body-text px-3">
                {{ "549,000" }}
              </span>
            </span>
          </v-col>
          <v-col class="col-5 offset-1">
            <span
              class="d-flex mr-2 pointer cta tex-center d-flex justify-center align-center red rounded white--text"
              @click="go('property/diani-sunrise-estate')"
            >
              <span class="body-text px-3">
                {{ "View" }}
              </span>
            </span>
          </v-col>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'DianiSunrise',

  data: () => {
    return {
      img_source: '0.png',
      counter: 0
    }
  },

  mounted () {
    // this.triggerChanges()
  },

  methods: {
    changeSource (code, counterAlreadySet) {
      if (!counterAlreadySet) {
        this.counter = Number(code)
      }
      this.img_source = code + '.png'
    },
    nextPhoto () {
      console.log(this.counter)
      if (this.counter === 4) {
        this.counter = 0
      } else {
        this.counter++
      }

      const imageName = this.counter
      this.changeSource(imageName, true)
    },
    previousPhoto () {
      console.log(this.counter)
      if (this.counter === 0) {
        this.counter = 4
      } else {
        this.counter--
      }

      const imageName = this.counter
      this.changeSource(imageName, true)
    },
    go (code) {
      const url = '/' + code
      // this.$router.push(url)
      window.location = url
    }
  }
}
</script>
<style lang="css" scoped>
  .img{
      /* height: 50px; */
      /* width: 50px; */
  }
</style>
