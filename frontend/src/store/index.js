import { createStore } from 'vuex'

export default createStore({
  state: {
    listFoods: [
      { src: 'https://i.imgur.com/fLnl8G9.jpg', name: 'banh bao', decs: 'Bánh Bao', price: 20000, ower: 'ABC', address: 'xxx Đường 30/4 - Hòa Xuân - Cẩm Lệ - Đà Nẵng' },
      { src: 'https://i.imgur.com/WUdmWOC.jpg', name: 'banh banh', decs: 'Bánh Canh', price: 30000, ower: 'DEF', address: 'xxx Đường 30/4 - Hòa Xuân - Cẩm Lệ - Đà Nẵng' },
      { src: 'https://i.imgur.com/QcvlJ10.jpg', name: 'banh my', decs: 'Bánh Mỳ', price: 12000, ower: 'GHI', address: 'xxx Đường 30/4 - Hòa Xuân - Cẩm Lệ - Đà Nẵng' },
      { src: 'https://i.imgur.com/FgJETdo.jpg', name: 'bun dau', decs: 'Bún Đậu', price: 35000, ower: 'JKL', address: 'xxx Đường 30/4 - Hòa Xuân - Cẩm Lệ - Đà Nẵng' },
      { src: 'https://i.imgur.com/m3OXN5t.jpg', name: 'bun gio', decs: 'Bún Giò', price: 25000, ower: 'MNO', address: 'xxx Đường 30/4 - Hòa Xuân - Cẩm Lệ - Đà Nẵng' },
      { src: 'https://i.imgur.com/zkcloKH.jpg', name: 'com ga', decs: 'Cơm Gà Quay', price: 45000, ower: 'PQR', address: 'xxx Đường 30/4 - Hòa Xuân - Cẩm Lệ - Đà Nẵng' },
      { src: 'https://i.imgur.com/EOrcrMk.jpg', name: 'com suon', decs: 'Cơm Sườn', price: 35000, ower: 'STU', address: 'xxx Đường 30/4 - Hòa Xuân - Cẩm Lệ - Đà Nẵng' },
      { src: 'https://i.imgur.com/BJTpeDB.jpg', name: 'my quang', decs: 'Mỳ Quảng', price: 20000, ower: 'VWX', address: 'xxx Đường 30/4 - Hòa Xuân - Cẩm Lệ - Đà Nẵng' },
      { src: 'https://i.imgur.com/0L4F02E.jpg', name: 'com ga xe', decs: 'Cơm Gà Xé', price: 40000, ower: 'YXZ', address: 'xxx Đường 30/4 - Hòa Xuân - Cẩm Lệ - Đà Nẵng' },
    ],
    listComponents: {
      isFoodsComponent: false,
      isDrinksComponent: false,
      isDetailsComponent: false,
      isBeerComponent: false,
      isFlowerComponent: false,
      isMarketComponent: false,
      isPharmacyComponent: false,
      isPetComponent: false,
    },
    selectedItem: {},
  },
  getters: {
  },
  mutations: {
    searchItems (state, data) {
      state.listFoods = data;
    },
    selectedComponent (state, data) {
      state.listComponents = data;
    },
    selectedItem (state, data) {
      state.selectedItem = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
