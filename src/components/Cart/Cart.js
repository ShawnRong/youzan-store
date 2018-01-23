import React, {
  Component
} from "react";
import {
  connect
} from "react-redux";

import {
  fetchShoppingCart,
  removeFromShoppingCart,
  selectShopProducts,
  selectProduct
} from "../../store/actions";
import "./Cart.css";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingShopId: ""
    };
    // this.onEditClickHandler = this.onEditClickHandler.bind(this);
  }
  componentDidMount() {
    this.props.onLoadShoppingCart();
  }

  onEditClickHandler(shopId) {
    this.setState({
      editingShopId: this.state.editingShopId ? "" : shopId
    });
  }

  render() {
    return ( <
      div className = "js-shop-list shop-list" > {
        this.props.shoppingCart ?
        this.props.shoppingCart.map(item => ( <
          div className = "block block-order block-cart"
          key = {
            item.shopId
          } >
          <
          div className = "header" >
          <
          div className = "select-group js-select-group" >
          <
          span className = {
            item.selectToBuy ? "check checked" : "check"
          }
          onClick = {
            () => this.props.onToggleShopGoods(item.shopId)
          }
          /> <
          /div> <
          a className = "shop-title" >
          <
          i className = "custom-store-img" > 店铺： < /i> {
            item.shopTitle
          } <
          /a> <
          a className = "j-edit-list pull-right c-blue font-size-12 edit-list"
          onClick = {
            () => this.onEditClickHandler(item.shopId)
          } >
          {
            this.state.editingShopId == item.shopId ? "完成" : "编辑"
          } <
          /a> <
          /div> <
          div style = {
            {
              marginRight: "-10px"
            }
          } >
          <
          ul className = "js-list block block-list block-list-cart border-0" > {
            item.goodsList.map(goods => ( <
              li className = "block-item block-item-cart"
              key = {
                goods.id
              }
              style = {
                this.state.editingShopId == item.shopId ?
                {
                  transform: "translateX(-70px)"
                } :
                  null
              } >
              <
              div >
              <
              div className = "check-container" >
              <
              span className = {
                goods.selectToBuy ? "check checked" : "check"
              }
              onClick = {
                () =>
                this.props.onToggleGoods(item.shopId, goods.id)
              }
              /> <
              /div> <
              div className = "name-card clearfix" >
              <
              a className = "thumb js-goods-link" >
              <
              img src = {
                goods.image
              }
              /> <
              /a> <
              div className = "detail" >
              <
              a className = "js-goods-link" >
              <
              h3 className = "title js-ellipsis" >
              <
              i > {
                goods.title
              } < /i> <
              /h3> <
              /a> <
              p className = "sku ellipsis" > {
                goods.sku
              } < /p> <
              div className = "num" > × < span className = "num-txt" > {
                goods.number
              } < /span> <
              /div> <
              div className = "num" >
              <
              div className = "quantity" >
              <
              button type = "button"
              className = "minus " / >
              <
              input type = "text" / >
              <
              button type = "button"
              className = "plus" / >
              <
              div className = "response-area response-area-minus" / >
              <
              div className = "response-area response-area-plus" / >
              <
              /div> <
              /div> <
              div className = "price c-orange" > ¥ < span > {
                goods.price
              } < /span> <
              /div> <
              /div> <
              /div> <
              /div> <
              div className = "delete-btn"
              onClick = {
                () =>
                this.props.onRemoveGoodsFromShoppingCart(
                  item.shopId,
                  goods.id
                )
              } >
              <
              span > 删除 < /span> <
              /div> <
              /li>
            ))
          } <
          /ul> <
          /div> <
          /div>
        )) :
          null
      } <
      /div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    shoppingCart: state.cart.shoppingCart
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onLoadShoppingCart: () => dispatch(fetchShoppingCart()),
    onRemoveGoodsFromShoppingCart: (shopId, goodsId) =>
      dispatch(removeFromShoppingCart(shopId, goodsId)),
    onToggleShopGoods: shopId => dispatch(selectShopProducts(shopId)),
    onToggleGoods: (shopId, goodsId) => dispatch(selectProduct(shopId, goodsId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);