const url = {
  hotLists: '/index/hotLists',
  banner: '/index/banner'
}

const host = 'http://rapapi.org/mockjsdata/24170'

for(let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url