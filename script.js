/**
* Created by ziko on 11/13/13.
*/

/*subject page*/
var subject=new Array();
subject[0]="dcom.html";// dcom
subject[1]="http://www.ce.kmitl.ac.th/subject.php?action=view&SUBJECT_ID=7";// dcom lab
subject[2]="http://www.ce.kmitl.ac.th/subject.php?action=view&SUBJECT_ID=150";// interface
subject[3]="http://www.ce.kmitl.ac.th/subject.php?action=view&SUBJECT_ID=154";// prob & stat

var infn=new Object();
$.get(subject[0],
    function(data) {
        var subject_id=6;
        var allsheet=new Array();

        document.write(data);

        var sheet_table =document.getElementsByTagName('table')[15];
        $('body').empty();
        var sheet_row   =sheet_table.getElementsByTagName('tr');
        alert(sheet_row.length);

        infn=sheet_row[2];

        $('body').append("<p>"+sheet_row[0].innerHTML+"</p>");// table HEAD is here
        var sheet_in_row   =sheet_row[0].getElementsByTagName('td');
        var row_length=sheet_in_row.length; // cal table row length
        //alert(row_length);
        //$("body").append("<p>"+sheet_in_row[i].innerHTML+"</p>");
        for(var i=1;i<sheet_row.length;i++){
            //$('body').append("<p>"+sheet_row[i].innerHTML+"</p>"); //print for test
            //console.log(sheet_row[i].innerHTML);

            $('body').append("<p>"+sheet_row[i].getElementsByTagName('td')[1].innerHTML+"</p>");//get orientation here
            for(var j=2;j<row_length;j++){
                item=sheet_row[i].getElementsByTagName('td')[j];
                item_link=item.getElementsByTagName('a');
                //console.log(i+":"+item_link.length);
                if(item_link.length){
                    $("body").append("<a href=\"http://www.ce.kmitl.ac.th"+item_link.item(0).getAttribute('href')+"\">link</a><br/>");
                    var sheet   =new Object();
                    sheet.orientation=sheet_row[i].getElementsByTagName('td')[1].innerHTML;//add filename
                    sheet.f_num=parseInt(parseInt(j)-2);
                    //console.log(sheet.f_num);
                    sheet.link="<a href=\"http://www.ce.kmitl.ac.th"+item_link.item(0).getAttribute('href')+"\">link</a>";
                    allsheet.push(sheet);
                    console.log("al : "+allsheet.length+" / "+sheet.orientation);
                }
                //$('body').append("<p>"+parseInt(parseInt(j)-parseInt(2))+":"+item.innerHTML+"</p>");//for test each element
            }
            $("body").append("<hr/>");

        }
        console.log(JSON.stringify(allsheet));

    }
);

