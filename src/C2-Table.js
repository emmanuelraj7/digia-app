import React from 'react';
import InlineEdit from 'react-edit-inline';
import deleteicon from './images/delete.png';
import editicon from './images/edit.png';
import $ from 'jquery';
import 'tablesorter';




class Table extends React.Component {
   
    onClickEditIcon(){ 
        var table = document.getElementById("table"),rIndex,cIndex;
        
        // table rows
        for(var i = 1; i < table.rows.length; i++)
        {
            // row cells
            for(var j = 0; j < table.rows[i].cells.length; j++)
            {
                // eslint-disable-next-line
                table.rows[i].cells[j].onclick = function()  
                {
                    rIndex = this.parentElement.rowIndex;
                    cIndex = this.cellIndex+1;
                    var cellno = cIndex
                    var rowno = rIndex
                    
                    
                   
                    if(cellno === 4){ 
                        var cellone = 1;
                        var celltwo = 2;
                        var cellthree = 3;
                        var cellfive = 5;
                        $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellno + ') #editimage').css('display', 'none');
                        $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellfive + ') #deleteimage').css('display', 'none');
                        $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellno + ') #cancelbutton').css('display', 'block');
                        $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellfive + ') #savebutton').css('display', 'block');
                        
                        //highlight inline edit boxes 
                        $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellone + ') .inline-edit-1').css('background-color', '#f2f2f2');
                        $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellone + ') .inline-edit-1').css('border', '1px solid gray');

                        $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + celltwo + ') .inline-edit-2').css('background-color', '#f2f2f2');
                        $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + celltwo + ') .inline-edit-2').css('border', '1px solid gray');

                        $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellthree + ') .inline-edit-3').css('background-color', '#f2f2f2');
                        $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellthree + ') .inline-edit-3').css('border', '1px solid gray');
                        

                    } 
                    
                }
            }
          }
    
    
        
            
    
        } 
    
  
    onClickDeleteIcon(x) {
        this.props.deleterow(x);
    }





    onClickCancelButton(){
        
        var table = document.getElementById("table"),rIndex,cIndex;
        
        // table rows
        for(var i = 1; i < table.rows.length; i++)
        {
            // row cells
            for(var j = 0; j < table.rows[i].cells.length; j++)
            {
                // eslint-disable-next-line
                table.rows[i].cells[j].onclick = function()  
                {
                    rIndex = this.parentElement.rowIndex;
                    cIndex = this.cellIndex+1;
                    var cellno = cIndex
                    var rowno = rIndex
                    
                    
                   
                    if(cellno === 4){ 
                        var cellone = 1;
                        var celltwo = 2;
                        var cellthree = 3;
                        var cellfive = 5;
                        $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellno + ') #editimage').css('display', 'block');
                        $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellfive + ') #deleteimage').css('display', 'block');
                        $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellno + ') #cancelbutton').css('display', 'none');
                        $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellfive + ') #savebutton').css('display', 'none');
                        
                        //De-highlight inline edit boxes
                        $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellone + ') .inline-edit-1').css('background-color', 'transparent');
                        $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellone + ') .inline-edit-1').css('border', '1px solid transparent');
                   
                        $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + celltwo + ') .inline-edit-2').css('background-color', 'transparent');
                        $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + celltwo + ') .inline-edit-2').css('border', '1px solid transparent');
                   
                        $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellthree + ') .inline-edit-3').css('background-color', 'transparent');
                        $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellthree + ') .inline-edit-3').css('border', '1px solid transparent');
                   

                   
                    } 
                    
                }
            }
         }
        }
     


 

    onClickSaveButton(){
    
    var table = document.getElementById("table"),rIndex,cIndex;
    
    // table rows
    for(var i = 1; i < table.rows.length; i++)
    {
        // row cells
        for(var j = 0; j < table.rows[i].cells.length; j++)
        {
            // eslint-disable-next-line
            table.rows[i].cells[j].onclick = function()  
            {
                rIndex = this.parentElement.rowIndex;
                cIndex = this.cellIndex+1;
                var cellno = cIndex
                var rowno = rIndex
                
                
               
                if(cellno === 5){
                    var cellone = 1;
                    var celltwo = 2;
                    var cellthree = 3;
                    var cellfour = 4;
                    $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellfour + ') #editimage').css('display', 'block');
                    $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellno + ') #deleteimage').css('display', 'block');
                    $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellfour + ') #cancelbutton').css('display', 'none');
                    $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellno + ') #savebutton').css('display', 'none');

                    //De-highlight inline edit boxes
                    $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellone + ') .inline-edit-1').css('background-color', 'transparent');
                    $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellone + ') .inline-edit-1').css('border', '1px solid transparent');
               
                    $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + celltwo + ') .inline-edit-2').css('background-color', 'transparent');
                    $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + celltwo + ') .inline-edit-2').css('border', '1px solid transparent');
               
                    $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellthree + ') .inline-edit-3').css('background-color', 'transparent');
                    $('table#table tr:nth-child(' + rowno + ') td:nth-child(' + cellthree + ') .inline-edit-3').css('border', '1px solid transparent');

                    
                } 
                
            }
        }
     }
    }
     
   
   

  render() {
   
    //Column sorting (function) 
    $(function(){
        $("#table").tablesorter();
      });

    
    //Table rows to display list of participants (function) 
    const row = (x, i, header) => 
    <tr key={`tr-${i}`}>
     {header.map((y,k) => (
         <td className="tablecell-font" key={`td-${1}`}><div className="inline-edit-1"><InlineEdit
              validate={this.customValidateText}
              activeClassName="editing"
              text={x.name}
              paramName="message"
              change={x.name}
              style={{
                backgroundColor: 'transparent',
                minWidth: 150,
                display: 'inline-block',
                margin: 0,
                padding: 0,
                fontSize: 15,
                outline: 0,
                border: 1
              }}
            /></div></td>)
     )}

     {header.map((y,k) => (
         <td className="tablecell-font" key={`ts-${2}`}><div className="inline-edit-2"><InlineEdit
              validate={this.customValidateText}
              activeClassName="editing"
              text={x.email}
              paramName="message"
              change={x.email}
              style={{
                backgroundColor: 'transparent',
                minWidth: 150,
                display: 'inline-block',
                margin: 1,
                padding: 0,
                fontSize: 15,
                outline: 3,
                border: 1
              }}
            /></div></td>)
     )}

     {header.map((y,k) => (
         <td className="tablecell-font" key={`tm-${3}`}><div className="inline-edit-3"><InlineEdit
              validate={this.customValidateText}
              activeClassName="editing"
              text={x.phone}
              paramName="message"
              change={x.phone}
              style={{
                backgroundColor: 'transparent',
                minWidth: 150,
                display: 'inline-block',
                margin: 0,
                padding: 0,
                fontSize: 15,
                outline: 0,
                border: 1
              }}
            /></div></td>)
     )}

     {header.map((y,k) => (
         // eslint-disable-next-line
         <td className="tablecell-font" key={`tl-${i}`}><button onClick={() => this.onClickCancelButton()} id="cancelbutton">Cancel</button><a onClick={() => this.onClickEditIcon()} id="editbutton" href="#"><img src={editicon} id="editimage" alt="text"></img></a></td>)
     )}
     
     
     
     {header.map((y,k) => (
         // eslint-disable-next-line
         <td className="tablecell-font" key={`tz-${i}`}><button onClick={() => this.onClickSaveButton()} id="savebutton">Save</button><a onClick={this.onClickDeleteIcon.bind(this, x)} href="#"><img className="" src={deleteicon} id="deleteimage" alt="text"></img></a></td>)
     )}
    </tr>    
   


    return (


        <div className="inner-wrapper"> 
       <table className="table-heading" id="table">
           <thead>
           <tr  className="table-heading">
        {
            
           this.props.tableheaders.map((x,i) =>
            <th className="table-heading table-heading-font" key={`az-${i}`}>
                {x.name}
            </th>)
        } 
       </tr> 
           </thead>    
           <tbody>
           { this.props.data.map((x,i) => row(x, i, this.props.data)) }
           </tbody>
       </table>    
      

       </div>

       
    );
  }
}

export default Table;

