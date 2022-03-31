import store from "../store/index.js";
import { createInstance } from "./index.js";

const token = store.getters.getJWTToken;
const instance = createInstance();
// function signup(email, nickName, password, success, fail) {
//   const user = {
//     email: email,
//     nickname: nickName,
//     password: password,
//   };

//   instance
//     .post("api/users/signup", JSON.stringify(user))
//     .then(success)
//     .catch(fail);
// }
function findAll(success, fail) {
  instance.get("/api/item/").then(success).catch(fail);
}
function getItemList(bcode, sortBy, order, page, size, success, fail) {
  const ItemList = {
    bcode: bcode,
    sortBy: sortBy,
    order: order,
    page: page,
    size: size,
  };

  instance
    .post("/api/item/search", JSON.stringify(ItemList), {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(success)
    .catch(fail);
}
function getSearchItem(
  keyword,
  bcode,
  sortBy,
  order,
  page,
  size,
  success,
  fail
) {
  const ItemList = {
    fields: ["description", "itemName"],
    searchTerm: keyword,
    bcode: bcode,
    sortBy: sortBy,
    order: order,
    page: page,
    size: size,
  };

  instance
    .post("/api/item/search", JSON.stringify(ItemList), {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(success)
    .catch(fail);
}

function findItemListByPage(pageNumber, success, fail) {
  const ItemList = {
    bcode: bcode,
    sortBy: sortBy,
    order: order,
    page: pageNumber,
    size: size,
  };
  instance
    .get("/api/item/search/" + pageNumber)
    .then(success)
    .catch(fail);
}

function findItemsByOwner(userId, success, fail) {
  instance
    .get("/api/item/seller/" + userId)
    .then(success)
    .catch(fail);
}

function findById(itemId, success, fail) {
  instance
    .get("/api/item/" + itemId, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(success)
    .catch(fail);
}

function findHistoryById(itemId, success, fail) {
  instance
    .get("/api/item/history/" + itemId)
    .then(function (response) {
      success(response);
    })
    .catch(fail);
}

function findBySeller(id, success, fail) {
  instance
    .get("/api/item/seller/" + id)
    .then(success)
    .catch(fail);
}
// 구매 완료한 상품들 가져오기
function findByBuyer(id, success, fail) {
  instance
    .get("/api/item/buyer/" + id)
    .then(success)
    .catch(fail);
}
// 입찰 중인 상품들 가져오기
function findByBidder(id, success, fail) {
  instance
    .get("/api/item/bidder/" + id)
    .then(success)
    .catch(fail);
}

function create(body, success, fail, final) {
  instance
    .post("/api/item", JSON.stringify(body))
    .then(success)
    .catch(fail)
    .finally(final);
}

function update(body, success, fail) {
  instance.put("/api/item", JSON.stringify(body)).then(success).catch(fail);
}

function remove(id, success, fail) {
  instance
    .delete("/api/item/" + id)
    .then(success)
    .catch(fail);
}

// 구매자가 배송중인 상품을 구매 확정
function confirm(itemId, buyer, success, fail) {
  instance
    .put("/api/item/" + itemId + "/by/" + buyer)
    .then(success)
    .catch(fail);
}

function findMySaleItems(userId, success, fail) {
  instance
    .get("api/item/of/" + userId)
    .then((res) => success(res))
    .catch((err) => fail(err));
}

export {
  findAll,
  findItemListByPage,
  findItemsByOwner,
  findById,
  findHistoryById,
  findBySeller,
  findByBuyer,
  findByBidder,
  create,
  update,
  remove,
  confirm,
  findMySaleItems,
  getItemList,
  getSearchItem,
};
