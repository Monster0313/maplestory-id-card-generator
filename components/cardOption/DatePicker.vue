<template>
  <div
    ref="datePicker"
    class="date-picker"
  >
    <div class="date-picker-container">
      <span>創角日期：</span>
      <button @click="isOpen = !isOpen">
        {{ formatDate(date) }}
      </button>
    </div>
    <div
      v-if="isOpen"
      class="date-picker-plugin"
    >
      <vc-date-picker
        v-model="date"
        :min-date="new Date(2003, 3, 29)"
        :max-date="new Date()"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import dayjs from 'dayjs'

export default {
  data () {
    return {
      isOpen: false,
      date: new Date(),
      formattedDate: ''
    }
  },
  computed: {
    ...mapState('card', ['startDate'])
  },
  watch: {
    formattedDate () {
      if (this.startDate !== this.formattedDate) {
        this.SET_CARD({ key: 'startDate', value: this.formattedDate })
      }
    }
  },
  created () {
    if (process.client) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      document.addEventListener('click', this.documentClick)
    }
  },
  beforeDestroy () {
    document.removeEventListener('click', this.documentClick)
  },
  methods: {
    ...mapMutations('card', ['SET_CARD']),
    formatDate (dateData) {
      this.formattedDate = dayjs(dateData).format('YYYY-MM-DD')
      return dayjs(dateData).format('YYYY-MM-DD')
    },
    documentClick (e) {
      const el = this.$refs.datePicker
      const { target } = e
      if ((el !== target) && !el.contains(target)) {
        this.isOpen = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  width: 180px;
  height: 30px;
  margin-left: 4px;
  border: none;
  background-color: #fff;
  font-size: 18px;
  font-family: 'Noto Sans TC', sans-serif;
  cursor: pointer;
}
.date-picker {
  position: relative;
  margin-bottom: 15px;
}
.date-picker > * {
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 400;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.date-picker-container > span {
  color: #fff;
}
.date-picker-plugin {
  position: absolute;
  top: 40px;
  right: 0;
}
</style>
