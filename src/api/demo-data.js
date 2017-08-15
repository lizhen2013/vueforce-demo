const data = new Map([
  ['均衡基金', {
    name: '均衡基金',
    amount: {
      label: '投资金额',
      value: 100000,
      edit: false
    },
    start: {
      id: 'start',
      label: '投资起始时间',
      value: '2017-08-01',
      edit: false
    },
    end: {
      id: 'end',
      label: '投资结束时间',
      value: '2017-08-31',
      edit: false
    },
    horizon: {
      label: '投资期限(天)',
      value: 30,
      edit: false
    },
    remark: {
      label: '备注',
      value: '该客户收入较适合购买均衡基金',
      edit: false
    }
  }],
  ['新兴市场', {
    name: '新兴市场',
    amount: {
      label: '投资金额',
      value: 200000,
      edit: false
    },
    start: {
      id: 'start',
      label: '投资起始时间',
      value: '2017-05-12',
      edit: false
    },
    end: {
      id: 'end',
      label: '投资结束时间',
      value: '2018-05-12',
      edit: false
    },
    horizon: {
      label: '投资期限(天)',
      value: 365,
      edit: false
    },
    remark: {
      label: '备注',
      value: '投资兴趣偏向新兴市场',
      edit: false
    }
  }],
  ['私募股权', {
    name: '私募股权',
    amount: {
      label: '投资金额',
      value: 1500000,
      edit: false
    },
    start: {
      id: 'start',
      label: '投资起始时间',
      value: '2017-01-01',
      edit: false
    },
    end: {
      id: 'end',
      label: '投资结束时间',
      value: '2017-04-30',
      edit: false
    },
    horizon: {
      label: '投资期限(天)',
      value: 120,
      edit: false
    },
    remark: {
      label: '备注',
      value: '无',
      edit: false
    }
  }],
  ['房地产', {
    name: '房地产',
    amount: {
      label: '投资金额',
      value: 5000000,
      edit: false
    },
    start: {
      id: 'start',
      label: '投资起始时间',
      value: '2017-08-01',
      edit: false
    },
    end: {
      id: 'end',
      label: '投资结束时间',
      value: '2018-08-31',
      edit: false
    },
    horizon: {
      label: '投资期限(天)',
      value: 365,
      edit: false
    },
    remark: {
      label: '备注',
      value: '客户比较喜欢投资房地产并且购买量较大,投资期间较长',
      edit: false
    }
  }]
])

const products = [
  '均衡基金',
  '新兴市场',
  '私募股权',
  '房地产'
]

const proto = {
  name: '',
  amount: {
    label: '投资金额',
    value: '',
    edit: false
  },
  start: {
    id: '',
    label: '投资起始时间',
    value: '',
    edit: false
  },
  end: {
    id: '',
    label: '投资结束时间',
    value: '',
    edit: false
  },
  horizon: {
    label: '投资期限(天)',
    value: '',
    edit: false
  },
  remark: {
    label: '备注',
    value: '',
    edit: false
  }
}

function fetch (name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(data.get(name))
    }, 1000)
  })
}

export default {
  fetch,
  products,
  data,
  proto
}
