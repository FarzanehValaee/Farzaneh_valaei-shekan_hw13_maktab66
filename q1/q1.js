let trId =0
let counter = 1;
function AddRow(){
              trId++
                    $("#tbody").prepend(
                             ` <tr id=${trId}>
                               <td scope="row">
                                <button type="button" class="btn btn-danger" id="${trId}">Delete</button> 
                                <button type="button" class="btn btn-primary" id="${trId}">Clone</button>
                               </td>
                               <td>
                               <input type="number" class="form-control" id="number">
                               </td>
                               <td>
                               <input type="text" class="form-control" id="type">
                               </td>
                               <td>
                                              <div class="form-check form-check-inline">
                                                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                                                  <label class="form-check-label" for="inlineRadio1">New</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                                                  <label class="form-check-label" for="inlineRadio2">In progress</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
                                                  <label class="form-check-label" for="inlineRadio3">Confirmed</label>
                                                </div>
                               </td>   
                            </tr> `)
                            return trId

}
function DeleteRow(trId){
          $(`#${trId}`).remove();
}
function CloneRow(Number,Type,radio){
          trId++
          $("#tbody").after(
                    ` <tr id=${trId}>
                      <td scope="row">
                       <button type="button" class="btn btn-danger" id="${trId}">Delete</button> 
                       <button type="button" class="btn btn-primary" id="${trId}">Clone</button>
                      </td>
                      <td><input type="number" class="form-control" id="number" value="${Number}"></td>
                      <td><input type="text" class="form-control" id="type" value="${Type}"></td>
                      <td>
                                     <div class="form-check form-check-inline">
                                         <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                                         <label class="form-check-label" for="inlineRadio1">New</label>
                                       </div>
                                       <div class="form-check form-check-inline">
                                         <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                                         <label class="form-check-label" for="inlineRadio2">In progress</label>
                                       </div>
                                       <div class="form-check form-check-inline">
                                         <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
                                         <label class="form-check-label" for="inlineRadio3">Confirmed</label>
                                       </div>
                      </td>   
                   </tr> `)
                   let radioId=$('input[name="inlineRadioOptions"]').attr('id')
                   if( radioId ==="option3"){
                    $("#number").attr('disabled', true);
                    $("#type").prop('disabled', true);
                   }
          return trId
} 
//______________________________
$( document ).ready(function() {
 $( "button" ).click(function(event) {
          $('.footer').text(`${counter} Not confirmed rows number`)
          let button = $( this ).text(); 
          let NumberValue = $("#number").val();
          let TypeValue = $("#type").val(); 
          let radioValue = $('input[name="inlineRadioOptions"]:checked').val();
          let trid =event.target.id       
          switch(button) {
                    case "Add Row":
                      AddRow();
                      counter++;
                      break;
                    case "Delete":
                       DeleteRow(trid);
                       counter--;
                      break;
                    case "Clone":
                       CloneRow(NumberValue,TypeValue,radioValue);
                       counter++;
                       break;
          }
 $("input:radio[name=inlineRadioOptions]").click(function() {
                    let radioId=$('input[name="inlineRadioOptions"]:checked').attr('id')
                    if(radioId ==="inlineRadio3"){
                              $("#number").attr('disabled', true);
                              $("#type").prop('disabled', true);
                              counter--;
                    }
                    else{
                              counter++;
                    }
          })

 });

});


