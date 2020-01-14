function changeTotalCart() {
  let total = 0;
  $(".cart-items")
    .find('input[name="total"]')
    .map((indx, item) => {
      console.log();
      total += parseFloat($(item).val());
    });

  $(".cart_sub_total")
    .find("span")
    .text(total);
  $(".cart-total-price")
    .find("strong")
    .text(total);
}

function changePrice(form, qty, options) {
  let price = qty * options.price;
  $cartItem = $($(form).parent(".cart-item"));
  $(form)
    .find('input[name="total"]')
    .val(price);
  $cartItem.find(".total-price ins").text(price);

  changeTotalCart();
}

function GetOptions(form) {
  let available = $(form).data("instock");
  let price = $(form).data("price");
  return { available, price };
}

function changeQTY(form, increase) {
  let qty = 1;
  let $input = $($(form).find(".qty"));
  let val = parseInt($input.val()) | 0;
  let options = GetOptions(form);
  if (increase) {
    let max = options.available !== undefined ? options.available : 500;
    qty = val < max ? ++val : max;
    $input.val(qty);
  } else {
    qty = val > 1 ? --val : val;
    $input.val(qty);
  }
  changePrice(form, qty, options);
}

function removeItem(event) {
  $(event)
    .parents(".cart-item")
    .get(0)
    .remove();
  changeTotalCart();
}

$(() => {
  $(".cart-item-quantity").on("click", ".plus", function() {
    $form = $(this).parent();
    changeQTY($form, true);
  });
  $(".cart-item-quantity").on("click", ".minus", function() {
    $form = $(this).parent();
    changeQTY($form, false);
  });

  $(".remove-item-btn").on("click", function() {
    removeItem(this);
  });
});
