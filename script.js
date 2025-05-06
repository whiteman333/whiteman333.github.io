// 获取模态框元素
var modal = document.getElementById("imageModal");
// 获取原始图片元素
var img = document.getElementById("profileImage");
// 获取模态框中的图片元素
var modalImg = document.getElementById("modalImage");
// 获取关闭按钮元素
var span = document.getElementsByClassName("close-modal")[0];

// 当用户点击图片时，打开模态框
if (img && modal && modalImg) { // 确保元素存在
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src; // 将模态框图片的 src 设置为被点击图片的 src
        modalImg.alt = this.alt; // 设置 alt 文本
    }
}

// 当用户点击关闭按钮 (x) 时，关闭模态框
if (span && modal) { // 确保元素存在
    span.onclick = function () {
        modal.style.display = "none";
    }
}

// 当用户点击模态框背景（图片之外的区域）时，也关闭模态框
if (modal) { // 确保元素存在
    modal.onclick = function (event) {
        // 检查点击的目标是否是模态框背景本身
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}