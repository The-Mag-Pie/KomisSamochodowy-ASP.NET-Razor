document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByTagName("body")[0].style.cursor = "wait";

    var messages = null;
    var ajax = AJAXinit();

    ajax.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                try {
                    messages = JSON.parse(this.responseText);
                }
                catch {
                    this.onerror();
                    return;
                }

                messages.forEach(element => {
                    var row = messagesTable.insertRow(1);
            
                    var timeCell = row.insertCell(0);
                    var nameCell = row.insertCell(1);
                    var emailCell = row.insertCell(2);
                    var topicCell = row.insertCell(3);
                    var contentCell = row.insertCell(4);
            
                    timeCell.innerHTML = element.Time;
                    nameCell.innerHTML = element.Name;
                    emailCell.innerHTML = "<a href=\"mailto:" + element.Email + "?subject=" + encodeURIComponent("RE: " + element.Topic) + "\">" + element.Email + "</a>";
                    topicCell.innerHTML = element.Topic;
                    contentCell.innerHTML = element.Content;
                });

                document.getElementsByTagName("body")[0].style.cursor = "auto";
                loadingInfo.style.display = "none";
            }
            else this.onerror();
        }
    };

    ajax.open("GET", "./api/Messages", true);
    ajax.send();
});