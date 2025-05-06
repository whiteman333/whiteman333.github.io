document.addEventListener('DOMContentLoaded', function () {
    // 获取模态框元素
    var modal = document.getElementById("imageModal");
    // 获取原始图片元素
    var img = document.getElementById("profileImage");
    // 获取模态框中的图片元素
    var modalImg = document.getElementById("modalImage");
    // 获取关闭按钮元素
    var span = document.querySelector(".close-modal"); // 使用 querySelector 更通用

    console.log("Modal:", modal); // 调试信息
    console.log("Image:", img);   // 调试信息
    console.log("Modal Image:", modalImg); // 调试信息
    console.log("Close Span:", span); // 调试信息

    // 只有当所有必需的元素都找到时才添加事件监听器
    if (modal && img && modalImg && span) {
        // 当用户点击图片时，打开模态框
        img.onclick = function () {
            console.log("Image clicked!"); // 调试信息
            modal.style.display = "block";
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        }

        // 当用户点击关闭按钮 (x) 时，关闭模态框
        span.onclick = function () {
            console.log("Close button clicked!"); // 调试信息
            modal.style.display = "none";
        }

        // 当用户点击模态框背景（图片之外的区域）时，也关闭模态框
        modal.onclick = function (event) {
            // 检查点击的目标是否是模态框背景本身
            if (event.target == modal) {
                console.log("Modal background clicked!"); // 调试信息
                modal.style.display = "none";
            }
        }
    } else {
        console.error("Modal elements not found. Check HTML IDs and structure."); // 错误提示
    }
});