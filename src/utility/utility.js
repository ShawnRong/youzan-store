const url = {
  hotLists: '/index/hotLists',
  banner: '/index/banner',
  topList: '/category/topList',
  subList: '/category/subList',
  rank: '/category/rank',
  searchList: '/search/list'
}

// const host = 'http://rapapi.org/mockjsdata/24170'
const host = 'https://www.easy-mock.com/mock/5a55a620084b71108ca0cf6d'

for(let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url