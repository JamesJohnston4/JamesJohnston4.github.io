
/***************************************
Collapse Button JavaScript use <button class=collapseB on a button before content that needs to be collapsed
*/

var col = document.getElementsByClassName('collapseB');
//loop through classes of collapseB
for (i = 0; i < col.length; i++) {
  //event listener for click with function to toggle active class in CSS
  col[i].addEventListener('click', function() {
    this.classList.toggle('active');

  // Element to be "folded"
    var content = this.nextElementSibling;

    //ternary statement to check and change dispay status
    content.style.display === 'block' ? content.style.display = 'none' : content.style.display = 'block';
  });
}
