function previewImage(event) {
  var reader = new FileReader();
  reader.onload = function() {
    var preview = document.getElementById('preview-image');
    preview.src = reader.result;
  }
  reader.readAsDataURL(event.target.files[0]);
}

function uploadImage() {
  var fileInput = document.getElementById('file-input');
  var imageGallery = document.getElementById('image-gallery');

  if (fileInput.files.length > 0) {
    var file = fileInput.files[0];
    var imageUrl = URL.createObjectURL(file);
    var imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.alt = 'Homework';
    imageGallery.appendChild(imageElement);
    fileInput.value = ''; // Clear the file input after upload
  } else {
    alert('Please select a file to upload.');
  }
}
