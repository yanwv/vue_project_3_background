// 品牌管理
import request from '@/utils/request'

// 获取
export const reqTradeMarkList = (page, limit) => request({ url: `/admin/product/baseTrademark/${page}/${limit}`, method: 'get' })

export const reqAddOrUpdateTradeMark = (tradeMark) => {
  // 修改
  if (tradeMark.id) {
    return request({ url: '/admin/product/baseTrademark/update', method: 'put', data: tradeMark })
  } else {
    // 新增
    return request({ url: '/admin/product/baseTrademark/save', method: 'post', data: tradeMark })
  }
}

// 删除
export const reqDeleteTradeMark = (id) => request({ url: `/admin/product/baseTrademark/remove/${id}`, method: 'delete' });