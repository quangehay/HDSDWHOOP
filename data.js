const WHOOP_DATA = {
    home: {
        layout: [
            // 1. HEADER
            { 
                type: "HEADER_NAV", 
                profile: { 
                    text: "QL", to: "profile_page", 
                    info: "Personal Profile Settings", 
                    diengiai: "Cài đặt thông tin cá nhân" 
                },
                streak: { 
                    val: "59", to: "streak_detail", 
                    info: "Days meeting strain goal", 
                    diengiai: "Số ngày đạt mục tiêu liên tiếp" 
                },
                today: { 
                    en: "TODAY", vi: "HÔM NAY", to: "calendar_view" 
                },
                battery: { 
                    val: "94%", to: "battery_settings", 
                    info: "Battery life remaining", 
                    diengiai: "Thời lượng pin còn lại" 
                }
            },
            
            // 2. RINGS
            { 
                type: "RINGS", 
                items: [
                    { 
                        key: "sleep", val: "84%", en: "SLEEP", vi: "GIẤC NGỦ", to: "sleep_page", 
                        info: "Hours slept vs needed", 
                        diengiai: "Giờ ngủ thực tế so với nhu cầu" 
                    },
                    { 
                        key: "recovery", val: "55%", en: "RECOVERY", vi: "PHỤC HỒI", to: "recovery_page", 
                        info: "Body's readiness to perform", 
                        diengiai: "Khả năng sẵn sàng tập luyện" 
                    },
                    { 
                        key: "strain", val: "4.7", en: "STRAIN", vi: "CĂNG THẲNG", to: "strain_page", 
                        info: "Cardiovascular load accumulated", 
                        diengiai: "Tải trọng tim mạch tích lũy" 
                    }
                ]
            },
            
            // 3. MONITORS
            { 
                type: "DUAL_MONITOR",
                health: { 
                    title: { en: "HEALTH MONITOR", vi: "THEO DÕI SỨC KHỎE" },
                    status: { en: "WITHIN RANGE", vi: "BÌNH THƯỜNG" },
                    to: "health_page",
                    info: "Key vital signs (HR, HRV, SPO2)",
                    diengiai: "Các chỉ số sinh tồn chính"
                },
                stress: { 
                    title: { en: "STRESS MONITOR", vi: "MỨC ĐỘ STRESS" },
                    status: { en: "LOW", vi: "THẤP" },
                    val: "0.7",
                    to: "stress_page",
                    info: "Current stress level based on HRV",
                    diengiai: "Mức độ căng thẳng dựa trên HRV"
                }
            },
            
            // 4. TITLE ROW
            { 
                type: "TITLE_ROW", 
                label: { 
                    en: "My Day", vi: "Ngày của tôi", 
                    info: "Overview of last 24h", 
                    diengiai: "Tổng quan hoạt động 24h qua" 
                },
                hasPlus: true 
            },
            
            // 5. DAILY OUTLOOK
            { 
                type: "DAILY_OUTLOOK", 
                label: { en: "Your Daily Outlook", vi: "Triển vọng hàng ngày" },
                to: "outlook_page",
                info: "Performance forecast based on sleep",
                diengiai: "Dự báo hiệu suất dựa trên giấc ngủ"
            },
            
            // 6. ACTIVITIES PANEL
            { 
                type: "ACTIVITIES_PANEL", 
                title: { en: "TODAY'S ACTIVITIES", vi: "HOẠT ĐỘNG HÔM NAY" },
                to: "activities_list",
                list: [
                    { 
                        name: { en: "SLEEP", vi: "GIẤC NGỦ" }, 
                        time: "6:33", badge: "🌙 6:57", color: "#7ba1ba", to: "sleep_detail" 
                    },
                    { 
                        name: { en: "OTHER", vi: "KHÁC" }, 
                        time: "8:57", badge: "🏃 4.5", color: "#0091ff", to: "workout_detail" 
                    }
                ],
                buttons: [
                    { en: "ADD ACTIVITY", vi: "THÊM", to: "add_popup" },
                    { en: "START ACTIVITY", vi: "BẮT ĐẦU", to: "start_screen" }
                ]
            },
            
            // 7. DASHBOARD LABEL
            { 
                type: "SECTION_LABEL", 
                label: { 
                    en: "My Dashboard", vi: "Bảng chỉ số", 
                    info: "Customize your visible metrics", 
                    diengiai: "Tùy chỉnh các chỉ số hiển thị" 
                }
            },
            
            // 8. METRIC LIST
            { 
                type: "METRIC_LIST",
                items: [
                    { 
                        en: "Calories", vi: "Calo tiêu thụ", val: "1,530", to: "cal_detail", 
                        info: "Total energy burned", 
                        diengiai: "Tổng năng lượng đã đốt cháy" 
                    },
                    { 
                        en: "Steps", vi: "Số bước chân", val: "4,961", to: "steps_detail", 
                        info: "Steps count from accelerometer", 
                        diengiai: "Dữ liệu đếm bước chân" 
                    }
                ]
            }
        ]
    }
};

const WHOOP_CONTENT = {
    menu: [
        { icon: "📷", en: "Create WHOOP Live", vi: "Tạo WHOOP Live", to: "live" },
        { icon: "📝", en: "Complete Journal", vi: "Viết nhật ký", to: "journal" },
        { icon: "🏋️", en: "Strength Trainer", vi: "Tập sức mạnh", to: "strength" },
        { icon: "➕", en: "Add Activity", vi: "Thêm hoạt động", to: "add" },
        { icon: "⏱️", en: "Start Activity", vi: "Bắt đầu tập", to: "start" }
    ],
    taskbar: [
        { id: "home", icon: "🏠", en: "Home", vi: "Trang chủ", to: "home" },
        { id: "health", icon: "❤️", en: "Health", vi: "Sức khỏe", to: "health_page" },
        { id: "community", icon: "👥", en: "Community", vi: "Cộng đồng", to: "community" },
        { id: "more", icon: "☰", en: "More", vi: "Thêm", to: "more" }
    ]
};
