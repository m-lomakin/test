const UrlMatcher={isGoogleDriveFileViewer:t=>/^https:\/\/drive\.google\.com\/(open|file\/d\/|document\/d\/)/.test(t),isClassroomCoursePage:t=>/^https?:\/\/classroom\.google\.com[^\.]*\/c\/[A-z0-9]+/.test(t),isClassroomGrader:t=>/^https?:\/\/classroom\.google\.com[^\.]*\/g\/tg\/[^\.]*/.test(t),extractClassroomAlternateId(t){const o=t.match(/^https?:\/\/classroom\.google\.com[^\.]*\/[cw]\/([A-z0-9]+)/);return o&&o.length>1?o[1]:null},extractDataFromAssignmentPage(t){const o=t.match(/\/u\/(\w+)\/c\/(\w+)\/a\/(\w+)/),e=t.match(/\/c\/(\w+)\/a\/(\w+)/);return o?[o[2],o[3],o[1]]:e?[e[1],e[2],"0"]:null},extraDataFromGraderPage(t){const o=t.match(/\/u\/(\w+)\/g\/tg\/(\w+)\/(\w+)/),e=t.match(/\/g\/tg\/(\w+)\/(\w+)/);return o?[o[2],o[3],o[1]]:e?[e[1],e[2],"0"]:null}};try{module.exports=UrlMatcher}catch(t){}