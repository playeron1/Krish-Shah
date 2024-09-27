var url_param = "test";
var uid = -1;
var attempt = -1;
var perf_report;
var test_data = {};
var coding_languages = {
    101: {
        name: 'BASH',
        mode: 'text/x-sh',
        value: "",
        id: 101
    },
    102: {
        name: 'C#',
        mode: 'text/x-csharp',
        value: "",
        id: 102
    },
    103: {
        name: 'Clojure',
        mode: 'text/x-clojure',
        value: "",
        id: 103
    },
    104: {
        name: 'Common Lisp',
        mode: 'text/x-common-lisp',
        value: "",
        id: 104
    },
    105: {
        name: 'Common Lisp (clisp)',
        mode: 'text/x-common-lisp',
        value: "",
        id: 105
    },
    106: {
        name: 'Erlang',
        mode: 'text/x-erlang',
        value: "",
        id: 106
    },
    107: {
        name: 'F#',
        mode: 'text/x-fsharp',
        value: "",
        id: 107
    },
    108: {
        name: 'Go',
        mode: 'text/x-go',
        value: "",
        id: 108
    },
    109: {
        name: 'Haskell',
        mode: 'text/x-haskell',
        value: "",
        id: 109
    },
    110: {
        name: 'JavaScript (rhino)',
        mode: 'text/javascript',
        value: "",
        id: 110
    },
    111: {
        name: 'JavaScript (spidermonkey)',
        mode: 'text/javascript',
        value: "",
        id: 111
    },
    112: {
        name: 'Kotlin',
        mode: 'text/x-java',
        value: "",
        id: 112
    },
    113: {
        name: 'Objective-C',
        mode: 'text/x-objectivec',
        value: "",
        id: 113
    },
    114: {
        name: 'Perl',
        mode: 'text/x-perl',
        value: "",
        id: 114
    },
    115: {
        name: 'PHP',
        mode: 'text/x-php',
        value: "",
        id: 115
    },
    116: {
        name: 'R',
        mode: 'text/x-rsrc',
        value: "",
        id: 116
    },
    117: {
        name: 'Ruby',
        mode: 'text/x-ruby',
        value: "",
        id: 117
    },
    118: {
        name: 'Scala',
        mode: '',
        value: "",
        id: 118
    },
    119: {
        name: 'SQL',
        mode: 'text/x-sql',
        value: "",
        id: 119
    },
    120: {
        name: 'Swift',
        mode: 'text/x-swift',
        value: "",
        id: 120
    },
    121: {
        name: 'VB.NET',
        mode: 'text/x-vb',
        value: "",
        id: 121
    },
    122: {
        name: 'Node.js',
        mode: 'text/javascript',
        value: "",
        id: 122
    },
    1: {
        name: 'C',
        mode: 'text/x-csrc',
        value: "#include <stdio.h>\n" +
            "int main()\n" +
            "{\n" +
            "   // Try out your code here\n" +
            "   printf(\"Hello, World!\");\n" +
            "   return 0;\n" +
            "}",
        id: 1
    },
    2: {
        name: 'C++',
        mode: 'text/x-c++src',
        value: "#include <iostream>\n" +
            "using namespace std;\n" +
            "\n" +
            "int main() \n" +
            "{\n" +
            "   // Try out your code here\n" +
            "    cout << \"Hello, World!\";\n" +
            "    return 0;\n" +
            "}",
        id: 2
    },
    6: {
        name: "Java 7",
        mode: "text/x-java",
        value:
            "class Main\n" +
            "{\n" +
            "  public static void main(String args[])\n" +
            "  {\n" +
            "    //Try out your code here\n" +
            '    System.out.println("Hello World!");\n' +
            "  }\n" +
            "}",
        id: 6
    },
    3: {
        name: 'Java 8',
        mode: 'text/x-java',
        value: "class Main\n" +
            "{\n" +
            "  public static void main(String args[])\n" +
            "  {\n" +
            "    //Try out your code here\n" +
            "    System.out.println(\"Hello World!\");\n" +
            "  }\n" +
            "}",
        id: 3
    },
    4: {
        name: 'Python 2',
        mode: 'text/x-python',
        value: "",
        id: 4
    },
    5: {
        name: 'Python 3.3',
        mode: 'text/x-python',
        value: "",
        id: 5
    },
    7: {
        name: 'Python 3.9',
        mode: 'text/x-python',
        value: "",
        id: 7
    },
    10: {
        name: 'JavaScript (Nodejs)',
        mode: 'text/javascript',
        value: "console.log(\"Hello World\")",
        id: 10
    }
};
var coding_editor;
var question_parent_no_map = {};

$(function () {
    url_param = fetch_url_param();
    uid = fetch_uid();
    attempt = fetch_attempt();
    fetch_report();
    // $('.playground').overlayScrollbars({
    //     scrollbars: {
    //         autoHide: "m",
    //     }
    // });
    $('.expandNav').click(function () {
        openNav();
    });

});

function fetch_url_param() {
    var url = window.location.href;
    var list = url.split("/");
    var id;
    var next = false;
    $.each(list, function (k, v) {
        if (next) {
            id = v;
            return false;
        }
        if (v == 'detail') {
            next = true;
        }
    });
    return id;
}

function fetch_uid() {
    var url = window.location.href;
    var list = url.split("/");
    var id = -1;
    var next = false;
    $.each(list, function (k, v) {
        if (next) {
            id = v;
            return false;
        }
        if (v == 'uid') {
            next = true;
        }
    });
    return id;
}

function fetch_attempt() {
    if(window.location.hash) {
        return window.location.hash.substring(1);
    }
    return -1;
}

function fetch_report() {
    var data = {
        url_param: url_param
    };
    if (uid !== undefined && uid !== null && uid !== -1)
        data['uid'] = uid;
    if(attempt !== undefined && attempt !== null && attempt !== -1) {
        data['attempt'] = attempt;
    }
    $.ajax({
        url: g_api_url + "test/report/",
        type: 'POST',
        headers: {
            'Authorization': fetch_user_token()
        },
        data: data,
        dataType: 'json',
        success: function (json) {
            if (json.status == 1 || json.status == 2) {
                perf_report = json;
                if (perf_report.show_detailed) {
                    if (perf_report.test_sections !== undefined && perf_report.test_sections !== null)
                        test_data['test_sections'] = perf_report.test_sections;
                    if (perf_report.question_map !== undefined && perf_report.question_map !== null)
                        test_data['question_map'] = perf_report.question_map;
                    if (perf_report.question_result !== undefined && perf_report.question_result !== null)
                        test_data['question_result'] = perf_report.question_result;
                    if (perf_report.test_name !== undefined && perf_report.test_name !== null)
                        test_data['test_name'] = perf_report.test_name;
                    showReport();
                } else {
                    window.history.back();
                }
            } else if (json.status == 0) {
                show_toast("failure", "Authorisation failed!", json.msg);
            }

        },
        error: function (e) {
            console.log('error');
            // gotoError('')

        }
    });
}

//Convert Seconds to Text
function secondsToDhms(seconds, short) {
    if (seconds == 0)
        return "0s";
    if (short === undefined)
        short = false;
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    if (short) {
        var dDisplay = d > 0 ? d + (d == 1 ? "d " : "d ") : "";
        var hDisplay = h > 0 ? h + (h == 1 ? "h " : "h ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? "m " : "m ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? "s" : "s") : "";
    } else {
        var dDisplay = d > 0 ? d + (d == 1 ? "day " : "days ") : "";
        var hDisplay = h > 0 ? h + (h == 1 ? "hour " : "hours ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? "minute " : "minutes ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? "second" : "seconds") : "";
    }

    return dDisplay + hDisplay + mDisplay + sDisplay;
}

//For making accordion active
function toggle_accordion(section_id) {
    $(".sidebar .sections .section").removeClass('active');
    $('.sidebar .sections .section[data-section-id=' + section_id + ']').addClass('active');
}

function replaceAll(str, find, fillups) {
    for (var i = 0; i < fillups; i++) {
        str = str.replace(find, "___________ " + "[" + (i + 1) + "]");

    }
    return str;
}

//Fetch Question with question id
function fetchQuestion(question_id, sectionName, QuesNo) {

    //To remove Matching Lines
    // LINES.destroyAll();
    var question = $(".clone-block .question-wrapper").clone();
    question.attr('data-question-id', question_id);
    var section_name = sectionName;
    var ques_no = QuesNo;
    var question_data = test_data.question_map[question_id];
    var questext = question_data.question_text;
    if (test_data.question_map[question_id].question_type == 5) {
        var fillups = test_data.question_map[question_id].fillup_count;
        questext = replaceAll(questext, "@@fillup@@", fillups);
    }
    var question_type = question_data.question_type;


    //for question data
    {
        var question_box = question.find('.question-box');
        if (ques_no < 10) {
            ques_no = "0" + ques_no;
        }

        question_box.find('.qno').html("QUESTION " + ques_no);
        question_box.find('.question-text').html(questext);
        if (question_data.question_paragraph != undefined) {
            var passage_box = question.find(".passage-box");
            passage_box.removeClass("hidden")
            if (question_parent_no_map[question_data['parent']] !== undefined && question_parent_no_map[question_data['parent']].length > 0) {
                question_parent_no_map[question_data['parent']] = question_parent_no_map[question_data['parent']].sort()
                let firstNo = question_parent_no_map[question_data['parent']][0];
                let lastNo = question_parent_no_map[question_data['parent']][question_parent_no_map[question_data['parent']].length - 1];
                passage_box.find(".title").html("Comprehension (Questions " + firstNo + "-" + lastNo + ")");
            } else {
                passage_box.find(".title").html("Comprehension (Question " + ques_no + ")");
            }
            // passage_box.find(".title").html("Comprehension (Question " + ques_no + ")");
            passage_box.find(".passage").html(question_data.question_paragraph);
            question_box.find(".question-text").removeClass("hidden").html(questext);
        } else {
            question_box.find(".question-title").removeClass("hidden");
            switch (question_type) {
                case 1: //MCQ
                    question_box.find(".question-title").html("Select the correct answer");
                    break;
                case 2: //MAQ
                    question_box.find(".question-title").html("Select all the options that apply");
                    break;
                case 3: //Rearrange
                    question_box.find(".question-title").html("Arrange in the correct sequence");
                    break;
                case 4: //Matching
                    question_box.find(".question-title").html("Match the following");
                    break;
                case 5: //Fillups
                    question_box.find(".question-title").html("Fill in the blank(s). Enter your answer against the respective blank number");
                    break;
                case 6: //Integer Type
                    question_box.find(".question-title").html("Enter your response as an integer ONLY.");
                    break;
                case 7: //Audio Type
                    question_box.find(".question-title").html("Audio response (Max. allowed " + question_data.time_limit + "s)");
                    break;
                case 8: //Video Type
                    question_box.find(".question-title").html("Video response (Max. allowed " + question_data.time_limit + "s)");
                    break;
                case 10: //Coding Type
                    question_box.find(".question-title").addClass("hidden");
                    break;
                case 11: //Essay
                    question_box.find(".question-title").html("Type out your response to the following question  in less than [" + question_data.word_limit + "] words.");
                    break;
                default:
                    break;
            }
            question_box.find(".question-text").html(questext);
        }
    }

    switch (question_type) {
        case 1://MCQ
            var option_flag = 0;
            $.each(question_data.options, function (k, v) {
                var option = $('.clone-block .mcqoption .inside').clone();
                option.find('.option_text').attr('option_id', k).html(v);
                if (typeof (question_data.user_ans) !== 'undefined' && question_data.user_ans !== null) {
                    if (k == question_data.user_ans[0]) {
                        option.find('.rad').html('radio_button_checked');
                        if (question_data.answer_status == 1) {//correct
                            option.addClass('correct');
                        } else if (question_data.answer_status == 2) {//not correct
                            option.addClass('wrong');
                        }
                    } else if (k == question_data.solution[0]) {
                        // option.addClass('partial');
                    }
                    if ((option[0].innerText).trim().length > 55) {
                        option_flag = 1;
                    }
                    question.find('.answer-box').addClass('mcqoption').append(option)
                }
            });
            if (option_flag == 1)
                question.find('.answer-box.mcqoption').find('.outside').removeClass('col-md-6').addClass('col-md-12').removeClass('one').removeClass('two');
            break;
        case 2://MAQ

            var option_flag = 0;
            $.each(question_data.options, function (k, v) {
                var option = $('.clone-block .maqoption .inside').clone();
                option.find('.option_text').attr('option_id', k).html(v);
                if (question_data.answer_status != 0) {
                    if (question_data.solution.includes(k)) {
                        if (question_data.user_ans.includes(k)) {
                            option.addClass('correct');
                            option.find('.rad').html('check_box');
                        } else {
                            // option.addClass('partial');
                        }
                    } else {
                        if (question_data.user_ans.includes(k)) {
                            option.find('.rad').html('check_box');
                            option.addClass('wrong');
                        }
                    }
                }
                if ((option[0].innerText).trim().length > 55) {
                    option_flag = 1;
                }
                question.find('.answer-box').addClass('maqoption').append(option)
            });
            if (option_flag == 1)
                question.find('.answer-box.maqoption').find('.outside').removeClass('col-md-6').addClass('col-md-12').removeClass('one').removeClass('two');
            break;
        case 3://Rearrange
            var wrong_answer_box;
            {//attempted
                if (question_data.answer_status == 2 || question_data.answer_status == 1) {
                    wrong_answer_box = $(".clone-block .question-wrapper .answer-box").clone();
                    wrong_answer_box.removeClass('answer-box').addClass('rearrange');
                    if (question_data.answer_status == 2)
                        wrong_answer_box.addClass('wrong')
                    if (question_data.answer_status == 1)
                        wrong_answer_box.addClass('correct')
                    $.each(question_data.user_ans, function (k, v) {
                        var option = $('.clone-block .rearrange .elem').clone();
                        option.attr('option_id', v).html("<span>" + v + "</span>" + '<i class="tripledot material-icons">more_vert  </i>');
                        wrong_answer_box.append(option)
                    });
                    question.find('.answer-box').append(wrong_answer_box);
                } else {
                    var answer_box = $(".clone-block .question-wrapper .answer-box").clone();
                    answer_box.addClass('font-yellow').removeClass('answer-box').addClass('rearrange');
                    $.each(question_data.options, function (k, v) {
                        var option = $('.clone-block .rearrange .elem').clone();
                        option.attr('option_id', v).html("<span>" + v + "</span>" + '<i class="tripledot material-icons">more_vert  </i>');
                        answer_box.append(option)
                    });
                    question.find('.answer-box').append(answer_box);
                }
            }
            break;
        case 4://Matching
            question.find('.answer-box').addClass('matching');
            var columnA = $('.clone-block .question-clone .answer-clone .matching .element-list').clone();
            var columnB = $('.clone-block .question-clone .answer-clone .matching .element-list').clone();
            columnA.addClass('columnA');
            columnB.addClass('columnB');
            $.each(question_data.options, function (k, v) {
                var optionA = $('.clone-block .question-clone .answer-clone .matching .match-option').clone();
                var optionB = $('.clone-block .question-clone .answer-clone .matching .match-option').clone();
                optionA.attr('data-option', k).html(k);
                optionB.attr('data-option', v).html(v);
                columnA.append(optionA);
                columnB.append(optionB);
            });
            question.find('.matching').append(columnA);
            question.find('.matching').append(columnB);
            break;
        case 5://Fillups
            var fillups = question_data.fillup_count;
            var options = $('.clone-block .fillintheblanks').clone();
            options.empty();
            for (var i = 0; i < fillups; i++) {
                if (question_data.answer_status == 2) {
                    var option = $('.clone-block .fillintheblanks .row').clone();
                    option.find('.serial').append("[" + (i + 1) + "]");
                    option.find('input').addClass('font-red').attr('placeholder', "Please type your answer here!").attr('disabled', true).val(question_data.user_ans[i]);
                    options.append(option);
                } else if (question_data.answer_status == 1) {
                    var option = $('.clone-block .fillintheblanks .row').clone();
                    option.find('.serial').append("[" + (i + 1) + "]");
                    option.find('input').addClass('font-green').attr('placeholder', "Please type your answer here!").val(question_data.user_ans[i]).attr('disabled', true);
                    options.append(option);
                } else {
                    var option = $('.clone-block .fillintheblanks .row').clone();
                    option.find('.serial').append("[" + (i + 1) + "]");
                    option.find('input').attr('placeholder', "Please type your answer here!").attr('disabled', true);
                    options.append(option);
                }
            }
            question.find('.answer-box').addClass('fillintheblanks').append(options);
            break;
        case 6://Integer Type
            var options = $('.clone-block .fillintheblanks').clone();
            options.empty();

            if (question_data.answer_status == 2) {
                var option = $('.clone-block .fillintheblanks .row').clone();
                option.find('.serial').addClass('hidden');
                option.find('input').addClass('font-red').attr('placeholder', "Please type your answer here!").attr('disabled', true);
                option.find('input').attr('id', 'intTextBox');
                options.append(option);
            } else if (question_data.answer_status == 1) {
                var option = $('.clone-block .fillintheblanks .row').clone();
                option.find('.serial').addClass('hidden');
                option.find('input').addClass('font-green').attr('placeholder', "Please type your answer here!").val(question_data.solution).attr('disabled', true);
                option.find('input').attr('id', 'intTextBox');
                options.append(option);
            } else {
                var option = $('.clone-block .fillintheblanks .row').clone();
                option.find('.serial').addClass('hidden');
                option.find('input').attr('placeholder', "Please type your answer here!").attr('disabled', true);
                option.find('input').attr('id', 'intTextBox');
                options.append(option);
            }
            question.find('.answer-box').addClass('fillintheblanks').append(options);

            break;
        case 7://Audio
            break;
        case 8://Video
            break;
        case 9: // Comprehension type
            if (question_data.user_ans == -1) {
                question.find('.answer-box').addClass('hidden');
            }
            break;
        case 10://Coding
            var editor = $('.clone-block .coding_wrapper').clone();
            question.find('.answer-box').append(editor);
            question.find('.sp_cm_textarea').attr('id', "editor" + question_id);
            var test_case_template = $('.clone-block .coding_tc_wrapper').clone();
            for (var i = 0; i < test_data.question_map[question_id].test_cases.length; i++) {
                var One_test_case = $('.clone-block .test_case_clones .tc_no_box').clone();
                One_test_case.attr('data-tc', i);
                One_test_case.html("Test Case " + (i + 1) + "<i class='material-icons'></i>");
                if (perf_report.question_data[question_id].answer_status != 0 && perf_report.question_data[question_id].user_ans != -1 && perf_report.question_data[question_id].test_cases[i].pass != undefined && perf_report.question_data[question_id].test_cases[i].pass == 1) {
                    One_test_case.addClass('correctMap').find('.material-icons').html('check_circle');
                } else if (perf_report.question_data[question_id].answer_status != 0 && perf_report.question_data[question_id].user_ans != -1 && perf_report.question_data[question_id].test_cases[i].pass != undefined && perf_report.question_data[question_id].test_cases[i].pass == 0) {
                    One_test_case.addClass('wrongMap').find('.material-icons').html('highlight_off');
                }

                test_case_template.find('.tc_wrapper').append(One_test_case);
                var One_test_desc = $('.clone-block .test_case_clones .test_case_desc').clone();
                if (perf_report.question_data[question_id].answer_status != 0 && perf_report.question_data[question_id].user_ans != -1 && perf_report.question_data[question_id].test_cases[i].msg != undefined) {
                    One_test_desc.find('.compiler_msg .compiler_msg_tc').html(perf_report.question_data[question_id].test_cases[i].msg);
                    One_test_desc.find('.compiler_msg').removeClass('hidden');
                }
                if (perf_report.question_data[question_id].answer_status != 0 && perf_report.question_data[question_id].user_ans != -1 && perf_report.question_data[question_id].test_cases[i].memory != undefined && perf_report.question_data[question_id].test_cases[i].time_complexity != undefined) {
                    One_test_desc.find('.compiler_scores .compiler-memory').html(perf_report.question_data[question_id].test_cases[i].memory + " b");
                    One_test_desc.find('.compiler_scores .compiler-time').html(perf_report.question_data[question_id].test_cases[i].time_complexity + " s");
                    One_test_desc.find('.compiler_scores').removeClass('hidden');
                }

                One_test_desc.attr('data-tc', i);
                One_test_desc.find('.input_tc').html(test_data.question_map[question_id].test_cases[i].in.replace(/\\n/g, "<br/>"));
                One_test_desc.find('.output_tc').html(test_data.question_map[question_id].test_cases[i].out.replace(/\\n/g, "<br/>"));
                test_case_template.find('.test_case_data').append(One_test_desc);
            }

            question.find('.answer-box').append(test_case_template);
            break;
        case 11://Essay
            if (question_data.user_ans == -1) {
                question.find('.answer-box').addClass('hidden');
            } else {
                question.find('.answer-box').append(question_data.user_ans).addClass('explain-box');
            }
            break;

        default:
        // code block
    }


    //time taken marks given

    var explain_head = $('.clone-block .explain-head').clone();
    var video = $('.clone-block .video_explain').clone();
    var ques_status = $('.clone-block .infoques').clone();
    var explain_box = $('.clone-block .explain-box').clone();
    if(test_data.question_map[question_id].time_spent) {
        question_box.find('.timespent').html(secondsToDhms(test_data.question_map[question_id].time_spent, 1));
    } else {
        question_box.find('.timespent-wrapper').addClass('hidden');
    }
    var q_status = test_data.question_map[question_id].answer_status;
    var qus_ans_status = 1;
    if(test_data.question_result[question_id].answer_status !== null && test_data.question_result[question_id].answer_status !== undefined)
        qus_ans_status = test_data.question_result[question_id].answer_status;
    var answers = answerStatus(question_id);
    var anslist = answers.useranswer;
    var correct_ans = answers.correct_ans;

    if (q_status == 0) {//unanswered
        explain_head.find('.ans_desc').html('Correct Answer: ' + correct_ans).addClass('font-yellow');
        question_box.find('.user_response').html("Not Attempted <span class=\"helper-marks\">+3<span>").addClass('font-yellow');
        question_box.find('.helper-marks').html(perf_report.question_result[question_id].score).addClass('not-attempt');
    } else if (q_status == 1) {//correct
        if (question_type == 11) {
            var w_c_c = perf_report.question_result[question_id].word_count_compliance;
            if (typeof (perf_report.question_result[question_id].word_count_compliance) === 'undefined')
                w_c_c = 'NA';
            explain_head.find('.ans_desc').html("Spelling Accuracy (%): " + perf_report.question_result[question_id].spelling + "<br>" + "Vocabulary Density (%): " + perf_report.question_result[question_id].vocab_density + "<br>" + "Content Relevance (%): " + perf_report.question_result[question_id].word_usage + "<br>" + "Word Count Compliance: " + w_c_c).addClass('font-yellow');
            explain_head.addClass('essay_height');
        } else {
            explain_head.find('.ans_desc').html('Correct Answer: ' + anslist).addClass('font-green');
        }
        question_box.find('.user_response').addClass('font-green');
        question_box.find('.helper-marks').html(perf_report.question_result[question_id].score).addClass('correct');
    } else if (q_status == 2) {//incorrect
        explain_head.find('.ans_desc').html('Correct Answer: ' + correct_ans).addClass('font-yellow');
        question_box.find('.user_response').html("Incorrect <span class=\"helper-marks\">+3<span>").addClass('font-red');
        question_box.find('.helper-marks').html(perf_report.question_result[question_id].score).addClass('wrong');
    } else if (q_status == 4) {
        question_box.find('.user_response').html("Partially Correct <span class=\"helper-marks\">+3<span>").addClass('font-yellow');
        question_box.find('.helper-marks').html(perf_report.question_result[question_id].score).addClass('not-attempt');
    }
    if(question_data.question_type == 4) {
        explain_head.find('.ans_desc').removeClass('col-xs-8');
        explain_head.find('.ans_desc').removeClass('col-md-9');
        explain_head.addClass('display-flex');
    } else if([7, 8].includes(question_data.question_type)) {
        if(q_status !== 0) {
            question_box.find('.user_response').html("Subject to manual evaluation");
        }
    } else if(question_data.question_type == 10) {
        if ((question_data.answer_status != 0) && (question_data.answer_status != undefined)) {
            explain_head.find('.ans_desc').html("You have passed " + perf_report.question_data[question_id].total_cases_passed + " out of " + perf_report.question_data[question_id].total_cases + " test cases.").addClass('font-yellow');
        } else if(q_status === undefined && qus_ans_status === 0){ //answered not saved
            explain_head.find('.ans_desc').html("");
            question_box.find('.user_response').html("Not Attempted <span class=\"helper-marks\">+3<span>").addClass('font-yellow');
            question_box.find('.helper-marks').html(perf_report.question_result[question_id].score).addClass('not-attempt');
            explain_head.addClass('hidden');
        } else {
            explain_head.find('.ans_desc').html("");
            explain_head.addClass('hidden');
        }
    } else if(question_data.question_type == 11) {
        if(![0, 1].includes(q_status)) {
            question_box.find('.user_response').html("Subject to manual evaluation");
        }
    }

    question.append(explain_head).append(explain_box);
    if(question_data.question_type < 7) {
        question.find('.explain-head').removeClass('hidden');
    }
    if (question_data.video_url != "") {
        if (question_data.video_url.includes('youtube.com') || question_data.video_url.includes('vimeo.com')) {
            let video1 = video.find("iframe.video1")[0];
            video1.src = question_data.video_url;
            $(video1).removeClass('hidden')
        } else {
            let video1 = video.find("video.video1")[0];
            get_policy(question_data.video_url, video1);
            $(video1).removeClass('hidden')
        }
        video.removeClass("hidden");

        question.append(video);
    }

    var explanation1 = "<p><br></p>";
    if (question_data.explanation_text != undefined && question_data.answer_status >= 0) {
        explanation1 = question_data.explanation_text;
        question.find('.explain-box').html(explanation1);
    }

    if (explanation1 !== "<p><br></p>") {
        if(explanation1) {
            question.find('.explain').removeClass('hidden');
            question.find('.explain').click(function () {
                if (question.find('.explain-box').hasClass('hidden')) {
                    question.find('.explain-box').removeClass('hidden');
                } else {
                    question.find('.explain-box').addClass('hidden');
                }
    
            });
        } else {
            question.find('.ans_desc').removeClass('col-xs-8');
            question.find('.ans_desc').removeClass('col-md-9');
        }
    }

    $('.display-area').append(question).append("<hr class=\"hr-line\">");

    if (question_type == 10) {

        codeStart();
        editor_initialise(question_data.default_lang, question_id);
    } else if (question_type == 4) {
        match(question_id);
    }

}

// Function to fetch policy for s3 video explanations
function get_policy(url, video1) {
    var user_token = fetch_user_token();
    var formdata = new FormData();
    formdata.append("video_url", url);
    $.ajax({
        type: 'POST',
        dataType: "json",
        url: g_api_url + "test/policy/",
        data: formdata,
        cache: false,
        contentType: false,
        processData: false,
        headers: {
            'Authorization': user_token
        },
        success: function (res) {
            video1.src = url + res.policy;
        },
        error: function (err) {
            console.log(err);
        }
    });
}

//set the side for report fetch
function setSidebar() {
    $('.sidebar .test-info .title').empty().append(test_data.test_name);
    $('.sidebar .sections').empty();
    var index = 1;
    $.each(test_data.test_sections, function (k, v) {
        var section = $('.clone-block .sidebar-clone .section').clone();
        var section_name = v.section_name.toUpperCase();
        section.find('.section-name').append(section_name);
        section.find('.section-number').html(index++);
        section.click(function () {
            toggle_accordion(k);
        });
        section.attr('data-section-id', k);
        section.find('.questions').empty();
        let quesNo = 1;
        $.each(v.questions, function (key, value) {
            let qid = value.question_id;
            // Check if question is of comprehension type
            if (test_data.question_map[qid].question_type === 9 && test_data.question_map[qid].children !== undefined && test_data.question_map[qid].children.length > 0) {
                // Add child questions of comprehension type
                test_data.question_map[qid].children.forEach(childQId => {
                    var ques_id = childQId;
                    var question = $('.clone-block .sidebar-clone .question').clone();
                    question.attr('data-question-id', ques_id);
                    question.attr('data-section-name', section_name);
                    question.attr('data-section-id', k);
                    var qno = quesNo;
                    if (qno < 10) {
                        qno = "0" + qno;
                    }
                    question.attr('data-question-num', qno);
                    question.find('.no').html(qno);
                    if (test_data.question_map !== null && test_data.question_map !== undefined) {
                        if (test_data.question_map[ques_id].bookmark_status == 1)
                            question.find('.ques_status').addClass('bookmarked');
                        if (test_data.question_map[ques_id].answer_status == 1)
                            question.find('.ques_status').addClass('correct');
                        else if (test_data.question_map[ques_id].answer_status == 2)
                            question.find('.ques_status').addClass('wrong');
                        else if (test_data.question_map[ques_id].user_ans != -1) {
                            question.find('.ques_status').addClass('partial');
                        }


                        var questext = test_data.question_map[ques_id].question_text;
                        questext = questext.replace(/<\/?[^>]+(>|$)/g, "");
                        if (test_data.question_map[ques_id].question_type == 5) {
                            var fillups = test_data.question_map[ques_id].fillup_count;
                            questext = replaceAll(questext, "@@fillup@@", fillups);
                        }
                        question.find('.text').empty().append(questext.substring(0, 29) + "...");
                    }
                    question.click(function () {
                        $('.question').removeClass('sidebar_active');
                        question.addClass('sidebar_active');
                        if ($('.playground .question-wrapper[data-question-id=' + ques_id + ']').position() != undefined) {
                            $('.playground').animate({
                                scrollTop: $('.playground .question-wrapper[data-question-id=' + ques_id + ']').position().top
                            }, 500);
                        }
                        openNav();
                    });
                    section.find('.questions').append(question);
                    quesNo++;
                });
            } else {
                var ques_id = value.question_id;
                var question = $('.clone-block .sidebar-clone .question').clone();
                question.attr('data-question-id', ques_id);
                question.attr('data-section-name', section_name);
                question.attr('data-section-id', k);
                var qno = quesNo;
                if (qno < 10) {
                    qno = "0" + qno;
                }
                question.attr('data-question-num', qno);
                question.find('.no').html(qno);
                if (test_data.question_map !== null && test_data.question_map !== undefined) {
                    if (test_data.question_map[ques_id].bookmark_status == 1)
                        question.find('.ques_status').addClass('bookmarked');
                    if (test_data.question_map[ques_id].answer_status == 1)
                        question.find('.ques_status').addClass('correct');
                    else if (test_data.question_map[ques_id].answer_status == 2)
                        question.find('.ques_status').addClass('wrong');
                    else if (test_data.question_map[ques_id].user_ans != -1) {
                        question.find('.ques_status').addClass('partial');
                    }


                    var questext = test_data.question_map[ques_id].question_text;
                    questext = questext.replace(/<\/?[^>]+(>|$)/g, "");
                    if (test_data.question_map[ques_id].question_type == 5) {
                        var fillups = test_data.question_map[ques_id].fillup_count;
                        questext = replaceAll(questext, "@@fillup@@", fillups);
                    }
                    question.find('.text').empty().append(questext.substring(0, 29) + "...");
                }
                question.click(function () {
                    $('.question').removeClass('sidebar_active');
                    question.addClass('sidebar_active');
                    if ($('.playground .question-wrapper[data-question-id=' + ques_id + ']').position() != undefined) {
                        $('.playground').animate({
                            scrollTop: $('.playground .question-wrapper[data-question-id=' + ques_id + ']').position().top
                        }, 500);
                    }
                    openNav();
                });
                section.find('.questions').append(question);
                quesNo++;
            }
        });
        $('.sidebar .sections').append(section);
    });
    $('.sidebar .sections').removeClass('hidden');
    $('.sidebar .test-info').removeClass('hidden');

}

function showReport() {
    //set Navbar
    if (perf_report.test_wise !== undefined && perf_report.test_wise !== null) {
        $('.center-block .data').html("<span class='yourmarks'>" + perf_report.test_wise.marks + "</span>/" + perf_report.test_wise.max_score);
        $('.end-block .data').html(secondsToDhms(perf_report.test_wise.total_time, 1));
        // if (perf_report.test_wise.cutoff_status) {
        //     $('.end-block').html("PASS").addClass('verdict-pass');
        // } else {
        //     $('.end-block ').html("FAIL").addClass('verdict-fail');
        // }
    }

    //Setting Sidebar
    setSidebar();
    var j = 0;
    $.each(test_data.test_sections, function (k, v) {
        var i = 1;
        var x = 1;
        var sectional_data = $('.clone-block .sectional-info').clone();
        sectional_data.find('.section-name').html(v.section_name);
        sectional_data.find('.section-data .marks .name').html("SCORE IN THIS SECTION");
        sectional_data.find('.section-data .time .name').html("TIME TAKEN IN THIS SECTION");
        sectional_data.find('.section-data .marks .data').html("<span class='yourmarks'>" + perf_report.sectional_data[v.section_id].marks + "</span>/" + perf_report.sectional_data[v.section_id].max_score);
        sectional_data.find('.section-data .time .data').html(secondsToDhms(perf_report.sectional_data[v.section_id].total_time, 1));
        $('.display-area').append(sectional_data);
        if (j == 0) {
            toggle_accordion(k);
            j++;
        }
        // Populate question_parent_no_map
        $.each(v.questions, function (key, value) {
            if (value.children !== undefined) {
                question_parent_no_map[value.question_id] = [];
                $.each(value.children, function (childIndex, child) {
                    question_parent_no_map[value.question_id].push(x);
                    x++;
                });
            }
            x++;
        });
        $.each(v.questions, function (key, value) {
            if (value.children !== undefined) {
                $.each(value.children, function (childIndex, child) {
                    fetchQuestion(child.question_id, v.section_name, i++);
                });
            } else {
                fetchQuestion(value.question_id, v.section_name, i++);
            }
        });
    });
}

//Editor Initialization
function editor_initialise(default_lang, question_id) {
    $('.display-area .editor_action_options .status').html('').removeClass('status_wrong').removeClass('status_right');

    let languages = test_data.question_map[question_id].language;

    let lang_selected = default_lang;
    let editor_wrapper_class = 'coding_wrapper';

    $.each(languages, function (k, v) {
        $(".playground .question-wrapper[data-question-id='" + question_id + "'] .coding_wrapper .editor_lang_select").append("<option value='" + k + "'>" + coding_languages[k].name + "</option>");
    });
    $(".playground .question-wrapper[data-question-id='" + question_id + "'] ." + editor_wrapper_class + " .editor_options .editor_lang_select_wrapper .editor_lang_select").change(function () {
        lang_selected = $(".playground .question-wrapper[data-question-id='" + question_id + "'] ." + editor_wrapper_class + " .editor_options .editor_lang_select_wrapper .editor_lang_select").val();
        $(".question-wrapper[data-question-id='" + question_id + "'] ." + editor_wrapper_class + ' .CodeMirror').remove();
        coding_editor = initialize_scratchpad(lang_selected, question_id);
    });
    coding_editor = initialize_scratchpad(lang_selected, question_id);
}

//For Coding
function codeStart() {
    $(".display-area .answer-box .coding_tc_wrapper .test_case_wrapper .tc_wrapper .tc_no_box[data-tc='" + 0 + "']").addClass('selected');
    $(".display-area .answer-box .coding_tc_wrapper .test_case_wrapper .test_case_data .test_case_desc[data-tc='" + 0 + "']").removeClass('hidden');
    $(".display-area .answer-box .coding_tc_wrapper .test_case_wrapper .tc_wrapper .tc_no_box").click(function () {
        $(".display-area .answer-box .coding_tc_wrapper .test_case_wrapper .tc_wrapper .tc_no_box").removeClass('selected');
        $(".display-area .answer-box .coding_tc_wrapper .test_case_wrapper .test_case_data .test_case_desc").addClass('hidden');
        var data_tc = $(this).attr('data-tc');
        $(this).addClass('selected');
        $(".display-area .answer-box .coding_tc_wrapper .test_case_wrapper .test_case_data .test_case_desc[data-tc='" + data_tc + "']").removeClass('hidden');

    });
    $(".display-area .answer-box .editor_action_options .custom-input .switch .switch-check").change(function () {
        console.log('calling');
        if ($(this).is(":checked")) {
            $(".display-area .answer-box .coding_tc_wrapper .test_case_wrapper").addClass('hidden');
            $(".display-area .answer-box .editor_action_options .test_case_custom_wrapper").removeClass('hidden');
            $(".display-area .answer-box .editor_action_options .buttons .submit").addClass('disabled');
            $(".display-area .answer-box .editor_action_options .buttons .custom-run").removeClass('hidden');
            $(".display-area .answer-box .editor_action_options .buttons .run").addClass('hidden');
        } else {
            console.log('2');
            $(".display-area .answer-box .editor_action_options .test_case_custom_wrapper").addClass('hidden');
            $(".display-area .answer-box .coding_tc_wrapper .test_case_wrapper").removeClass('hidden');
            $(".display-area .answer-box .editor_action_options .buttons .submit").removeClass('disabled');
            $(".display-area .answer-box .editor_action_options .buttons .run").removeClass('hidden');
            $(".display-area .answer-box .editor_action_options .buttons .custom-run").addClass('hidden');


        }
    });

}

// initializing scratchpad
function initialize_scratchpad(lang_id, question_id) {
    var coding_ans = perf_report.question_data[question_id].user_ans;
    let languages = test_data.question_map[question_id].language;
    if (coding_ans != -1 && test_data.question_map[question_id] !== undefined && test_data.question_map[question_id].user_ans !== undefined) {
        languages = test_data.question_map[question_id].user_ans;
    }
    let mode, value;
    editor_id = "editor" + question_id;
    if (lang_id == 0) {
        mode = "";
        value = "";
    } else {
        mode = coding_languages[lang_id]['mode'];
        value = "//YOUR CODE// \n \n";
        value = value + languages[lang_id]['sample'];
        if (test_data.question_map[question_id].language[lang_id].solution != undefined) {
            value = value + "\n \n //YOUR CODE ENDS// \n \n \n //SOLUTION MENTIONED BELOW // \n \n \n";
            value = value + test_data.question_map[question_id].language[lang_id].solution;
            value = value + "\n \n //SOLUTION ENDS//";
        }
    }

    var sp_cm_editor = CodeMirror.fromTextArea($('.playground #' + editor_id)[0], {
        lineNumbers: true,
        matchBrackets: true,
        mode: mode,
        indentUnit: 4,
        indentWithTabs: true,
        theme: "blackboard",
        readOnly: true
    });
    sp_cm_editor.setSize(null, "350px");
    sp_cm_editor.setValue(value);
    sp_cm_editor.refresh();
    sp_cm_editor.on('change', function () {
        test_data.question_map[question_id].language[lang_id].sample = sp_cm_editor.getValue();
    });
    this.sp_cm_editor = sp_cm_editor;
    return sp_cm_editor;
}


//For Matching
function match(question_id) {

    var activeA = null;
    var activeB = null;
    var lineSettings = {
        name: 'match-line',
        state: 'new',
        stroke: 3,
        parent: '.display-area .question-wrapper[data-question-id="' + question_id + '"] .matching'
    };
    var setStatus = function (item, status) {
        if (item.status === status) return;
        item.status = status;
        item.el.setAttribute('data-status', status);
    };
    var setAnswer = function (item, status) {
        if (item.status === status) return;
        item.answer = status;
        item.el.setAttribute('data-answer', status);
    };
    var drawLine = function (optionA, optionB, save, answer_status) {
        setStatus(optionA, 'selected');
        setStatus(optionB, 'selected');
        activeA = null;
        activeB = null;
        var line = LINES.createLine(optionA.anchor, optionB.anchor, lineSettings);
        setTimeout(function () {
            line.state('draw');
        }, 10);
        setTimeout(function () {
            var status = 'answered';
            line.state(status);
            var color;
            if (answer_status == -1) {
                color = getRandomColor();
            } else if (answer_status == 0) {
                color = 'red';
            } else {
                color = 'green';
            }
            line.el.style.backgroundColor = color;
            optionA.el.style.borderColor = color;
            optionB.el.style.borderColor = color;
            setStatus(optionA, status);
            setStatus(optionB, status);
            setAnswer(optionA, optionB.key);
            setAnswer(optionB, optionA.key);
            if (save)
                extractUserResponse(question_id);
        }, 510);
    };
    var elemsA = $('.display-area .matching')[0].querySelectorAll('.columnA li');
    var elemsB = $('.display-area .matching')[0].querySelectorAll('.columnB li');
    elemsA = Array.prototype.map.call(elemsA, function (elem) {
        var key = elem.getAttribute('data-option');
        return {
            el: elem,
            status: 'blank',
            answer: '',
            key: key,
            anchor: LINES.createAnchor({
                el: elem,
                xOrigin: 'right',
                yOrigin: 'center'
            })
        };
    });
    elemsB = Array.prototype.map.call(elemsB, function (elem) {
        var key = elem.getAttribute('data-option');
        return {
            el: elem,
            status: 'blank',
            answer: '',
            key: key,
            anchor: LINES.createAnchor({
                el: elem,
                xOrigin: 'left',
                yOrigin: 'center'
            })
        };
    });
    var user_answer = test_data.question_map[question_id].user_ans;
    if (user_answer !== undefined && user_answer != -1) {
        $.each(user_answer, function (k, v) {
            elemsA.forEach(function (elem) {
                if (elem.key == k) {
                    elemsB.forEach(function (elemB) {
                        if (elemB.key == v) {
                            if (test_data.question_map[question_id].answer_status == undefined || test_data.question_map[question_id].answer_status < 0)
                                drawLine(elem, elemB, false, -1);
                            else {
                                if (test_data.question_map[question_id].solution[elem.key] == v) {
                                    drawLine(elem, elemB, false, 1);
                                } else {
                                    drawLine(elem, elemB, false, 0);
                                }
                            }
                            return false;
                        }
                    });
                }
            });
        });
    }
}

//for explanantion box answer status
function answerStatus(question_id) {
    var anslist = "";
    var correct_ans_list = "";
    var question_data = test_data.question_map[question_id];
    var question_type = question_data.question_type;
    switch (question_type) {
        case 1://MCQ
            if (question_data.answer_status != 0) {
                $.each(question_data.user_ans, function (k, v) {
                    anslist += question_data.options[v] + " ";
                });
            }
            if (question_data.answer_status == 2 || question_data.answer_status == 0) { //if answer is incorrect adding the correct answer
                $.each(question_data.solution, function (k, v) {
                    correct_ans_list += question_data.options[v] + " ";
                });
            }
            break;
        case 2://MAQ
            if (question_data.answer_status != 0) {
                $.each(question_data.user_ans, function (k, v) {
                    if (k != 0) {
                        anslist += " , ";
                    }
                    anslist += question_data.options[v];

                });
            }
            if (question_data.answer_status == 2 || question_data.answer_status == 0) {//if answer is incorrect adding the correct answer
                $.each(question_data.solution, function (k, v) {
                    if (k != 0) {
                        correct_ans_list += " , ";
                    }
                    correct_ans_list += question_data.options[v] + " ";
                });
            }
            break;
        case 3://Rearrange
            var wrong_answer_box;

            if (question_data.answer_status == 0) {//unanswered

            } else {//attempted
                $.each(question_data.user_ans, function (k, v) {
                    if (k != 0) {
                        anslist += " , ";
                    }
                    anslist += v + " ";
                });
            }
            if (question_data.answer_status == 2 || question_data.answer_status == 0) {//if answer is incorrect adding the correct answer
                $.each(question_data.solution, function (k, v) {
                    if (k != 0) {
                        correct_ans_list += " , ";
                    }
                    correct_ans_list += v + " ";
                });
            }
            break;
        case 4://Matching
            if (question_data.answer_status != 0) {
                $.each(question_data.user_ans, function (k, v) {
                    anslist += k + " > " + v + " , ";
                });
            }
            if (question_data.answer_status == 2 || question_data.answer_status == 0) {//if answer is incorrect adding the correct answer
                $.each(question_data.solution, function (k, v) {
                    correct_ans_list += k + " > " + v + " , ";
                });
            }
            break;
        case 5://Fillups
            if (question_data.answer_status != 0) {
                $.each(question_data.solution, function (k, v) {
                    if (k != 0) {
                        anslist += " , ";
                    }
                    anslist += v + " ";
                });
            }
            if (question_data.answer_status == 2 || question_data.answer_status == 0) {//if answer is incorrect adding the correct answer
                $.each(question_data.solution, function (k, v) {
                    if (k != 0) {
                        correct_ans_list += " , ";
                    }
                    correct_ans_list += v + " ";
                });
            }
            break;
        case 6://Integer Type
            if (question_data.answer_status != 0) {
                $.each(question_data.user_ans, function (k, v) {
                    anslist += v + " ";
                });
            }
            if (question_data.answer_status == 2 || question_data.answer_status == 0) {//if answer is incorrect adding the correct answer
                $.each(question_data.solution, function (k, v) {
                    correct_ans_list += v + " ";
                });
            }
            break;
        case 7://Audio
            break;
        case 8://Video
            break;
        case 10://Coding

            break;
        case 11://Essay
            if (question_data.answer_status != 0) {
                anslist = question_data.user_ans;
            }
            break;

        default:
        // code block
    }

    var answers = {
        'useranswer': anslist,
        'correct_ans': correct_ans_list
    };
    return answers;
}

//for opening sidebar in mobile view
var bool = 1;

function openNav() {
    if (bool == 1) {
        $('.sidebar').removeClass('animated fadeOutLeft zero_width');
        $('.sidebar').addClass('animated fadeInRight col-xs-12 col-sm-12');

        bool = 0;
    } else {
        $('.sidebar').addClass('animated fadeOutLeft zero_width');
        $('.sidebar').removeClass('animated fadeInRight col-xs-12 col-sm-12');

        bool = 1;
    }
}