const convertString = (fileName) => {
    // Tách phần tên file và đuôi file
    var parts = fileName.split('.');
    var extension = parts.pop();
    var name = parts.join('.');
  
    // Thay thế các ký tự đặc biệt trừ dấu gạch dưới (_) bằng dấu gạch dưới (_)
    var replacedName = name.replace(/[\W_]+/g, '_');
  
    // Loại bỏ các dấu gạch dưới (_) dư thừa
    var finalName = replacedName.replace(/_+/g, '_');
  
    // Ghép phần tên file và đuôi file lại
    var convertedFileName = finalName + '.' + extension;
  
    return convertedFileName;
 };
 
 export default convertString;
 