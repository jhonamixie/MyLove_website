function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function openImage(img) {
    document.getElementById('imageModal').style.display = 'block';
    document.getElementById('modalImage').src = img.src;
}

function closeImage() {
    document.getElementById('imageModal').style.display = 'none';
}
