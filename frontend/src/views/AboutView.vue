<template>
  <div class="about">
    <v-row>
      <v-col cols="4">
        <v-text-field
        dense
        outlined
        label="text"
        v-model="text"></v-text-field>
      </v-col>
      <v-col cols="4">
        <p>{{ parsePhoneNumber }}</p>
      </v-col>
      <v-col cols="4">
        <v-icon @click="changeData">mdi-sync</v-icon>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    text: '',
  }),
  methods: {
    init() {
      this.text = 'Nguyen Thanh Nhan';
    },
    changeData() {
      if (this.text === 'Nguyen Thanh Nhan') {
        this.text = 'Nodejs + Vue 3';
      } else {
        this.text = 'Nguyen Thanh Nhan';
      } 
    },
  },
  watch: {
    text(oldValue, newValue) {
      console.log(oldValue + newValue);
    },
  },
  computed: {
    parsePhoneNumber() {
      if (this.text === 'Nguyen Thanh Nhan') {
        return this.text + ' dang hoc node';
      } else {
        return 'Khoa hoc '.concat(this.text);
      }
    }
  },
  created() {
    this.init();
  },
}
</script>
