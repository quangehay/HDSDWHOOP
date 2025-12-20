const WHOOP_DATA = {
    // --- 1. HOME ---
    home: {
        layout: [
            { 
                type: "HEADER_NAV", 
                profile: { text: "QL", to: "profile_page", info: "User Profile", diengiai: "Hồ sơ" },
                streak:  { val: "88", to: "streak_detail", info: "Streak", diengiai: "Chuỗi ngày" },
                today:   { en: "TODAY", vi: "HÔM NAY", to: "calendar_view" },
                battery: { val: "98%", to: "battery_settings", info: "Battery", diengiai: "Pin" }
            },
            { 
                type: "RINGS", 
                items: [
                    { key: "sleep", val: "84%", en: "SLEEP", vi: "GIẤC NGỦ", to: "sleep_page", info: "Sleep Performance", diengiai: "Chất lượng giấc ngủ" },
                    { key: "recovery", val: "92%", en: "RECOVERY", vi: "PHỤC HỒI", to: "recovery_page", info: "Recovery", diengiai: "Phục hồi cơ thể" },
                    { key: "strain", val: "4.7", en: "STRAIN", vi: "CĂNG THẲNG", to: "strain_page", info: "Day Strain", diengiai: "Mức độ căng thẳng" }
                ]
            },
            { 
                type: "DUAL_MONITOR",
                health: { title: { en: "HEALTH MONITOR", vi: "THEO DÕI SỨC KHỎE" }, status: { en: "WITHIN RANGE", vi: "BÌNH THƯỜNG" }, to: "health_page", info: "All vitals normal", diengiai: "Chỉ số bình thường" },
                stress: { title: { en: "STRESS MONITOR", vi: "MỨC ĐỘ STRESS" }, status: { en: "LOW", vi: "THẤP" }, val: "0.7", to: "stress_page", info: "Stress zone", diengiai: "Vùng căng thẳng" }
            },
            { type: "TITLE_ROW", label: { en: "My Day", vi: "Ngày của tôi", info: "Overview", diengiai: "Tổng quan" }, hasPlus: true },
            { type: "DAILY_OUTLOOK", label: { en: "Your Daily Outlook", vi: "Triển vọng hàng ngày" }, to: "outlook_page", info: "Insights", diengiai: "Dự báo" },
            { 
                type: "ACTIVITIES_PANEL", 
                title: { en: "TODAY'S ACTIVITIES", vi: "HOẠT ĐỘNG HÔM NAY" },
                to: "activities_list",
                list: [
                    { name: { en: "SLEEP", vi: "GIẤC NGỦ" }, time: "6:33", badge: "🌙 6:57", color: "#7ba1ba", to: "sleep_page" },
                    { name: { en: "OTHER", vi: "KHÁC" }, time: "8:57", badge: "🏃 4.5", color: "#0091ff", to: "workout_view" }
                ],
                buttons: [
                    { en: "ADD ACTIVITY", vi: "THÊM", to: "add_popup" },
                    { en: "START ACTIVITY", vi: "BẮT ĐẦU", to: "start_screen" }
                ]
            },
            { type: "SECTION_LABEL", label: { en: "My Dashboard", vi: "Bảng chỉ số", info: "Metrics", diengiai: "Chỉ số" } },
            { 
                type: "METRIC_LIST",
                items: [
                   { 

                        en: "Calories", vi: "Calo tiêu thụ", val: "885", to: "cal_detail", 

                        info: "Total calories burned", 

                        diengiai: "Tổng calo đã đốt cháy" 

                    },

                    { 

                        en: "Steps", vi: "Số bước chân", val: "1,658", to: "steps_detail", 

                        info: "Pedometer count", 

                        diengiai: "Đếm bước từ gia tốc kế" 

                    },

                    { 

                        en: "Resting Heart Rate", vi: "Nhịp tim nghỉ", val: "60", to: "rhr_detail", 

                        info: "Beats per minute while resting", 

                        diengiai: "Nhịp tim/phút khi nghỉ ngơi" 

                    },

                    { 

                        en: "Sleep Debt", vi: "Nợ ngủ", val: "1:15", to: "sleep_debt_detail", 

                        info: "Sleep lost over time", 

                        diengiai: "Lượng ngủ thiếu hụt tích lũy" 

                    },

                    { 

                        en: "VO₂ Max", vi: "VO₂ Tối đa", val: "42", to: "vo2_max_detail", 

                        info: "Cardiorespiratory fitness", 

                        diengiai: "Sức bền tim mạch tối đa" 

                    },

                    { 

                        en: "Heart Rate Variability", vi: "Biến thiên nhịp tim (HRV)", val: "41", to: "hrv_detail", 

                        info: "Time variance between beats (ms)", 

                        diengiai: "Biến động thời gian giữa các nhịp (ms) \n\n Mỗi người có HRV khác nhau, không nên so sánh giữa các cá nhân." 

                    },

                    { 

                        en: "HR Zones 1-3 (Weekly)", vi: "Vùng nhịp tim 1-3 (Tuần)", val: "3:38", to: "zones_low", 

                        info: "Time in low-moderate intensity", 

                        diengiai: "Thời gian ở cường độ thấp-trung bình" 

                    },

                    { 

                        en: "HR Zones 4-5 (Weekly)", vi: "Vùng nhịp tim 4-5 (Tuần)", val: "0:00", to: "zones_high", 

                        info: "Time in high intensity", 

                        diengiai: "Thời gian ở cường độ cao" 

                    },

                    { 

                        en: "Average Heart Rate", vi: "Nhịp tim trung bình", val: "68", to: "avg_hr", 

                        info: "Daily average heart rate", 

                        diengiai: "Nhịp tim trung bình trong ngày" 

                    },

                    { 

                        en: "Day Strain", vi: "Căng thẳng ngày", val: "4.8", to: "strain_detail", 

                        info: "Accumulated cardiovascular load", 

                        diengiai: "Tải trọng tim mạch tích lũy" 

                    },

                    { 

                        en: "Hours of Sleep", vi: "Thời gian ngủ", val: "6:57", to: "sleep_hours", 

                        info: "Actual sleep duration", 

                        diengiai: "Thời lượng ngủ thực tế" 

                    },

                    { 

                        en: "HR Zones All (Weekly)", vi: "Tất cả vùng nhịp tim", val: "8:18", to: "zones_all", 

                        info: "Total time in all zones", 

                        diengiai: "Tổng thời gian trong mọi vùng tim" 

                    },

                    { 

                        en: "Lean Body Mass", vi: "Khối lượng cơ nạc", val: "❯", to: "lean_mass", 

                        info: "Weight minus fat mass", 

                        diengiai: "Trọng lượng cơ thể trừ mỡ" 

                    },

                    { 

                        en: "Recovery", vi: "Phục hồi", val: "55%", to: "recovery_detail", 

                        info: "Readiness to perform", 

                        diengiai: "Mức độ sẵn sàng tập luyện" 

                    },

                    { 

                        en: "Respiratory Rate", vi: "Nhịp thở", val: "13.4", to: "resp_rate", 

                        info: "Breaths per minute", 

                        diengiai: "Số nhịp thở mỗi phút khi ngủ" 

                    },

                    { 

                        en: "Restorative Sleep (%)", vi: "Giấc ngủ phục hồi (%)", val: "40%", to: "restorative_pct", 

                        info: "Percentage of REM + Deep sleep", 

                        diengiai: "Tỷ lệ ngủ REM và ngủ sâu" 

                    },

                    { 

                        en: "Restorative Sleep (hrs)", vi: "Giấc ngủ phục hồi (giờ)", val: "2:55", to: "restorative_hrs", 

                        info: "Time in REM + Deep sleep", 

                        diengiai: "Thời gian ngủ REM và ngủ sâu" 

                    },

                    { 

                        en: "Sleep Consistency", vi: "Tính nhất quán", val: "84%", to: "sleep_consistency", 

                        info: "Bedtime & wake time similarity", 

                        diengiai: "Sự đều đặn của giờ ngủ/thức" 

                    },

                    { 

                        en: "Sleep Efficiency", vi: "Hiệu quả giấc ngủ", val: "95%", to: "sleep_efficiency", 

                        info: "Time asleep vs time in bed", 

                        diengiai: "Tỷ lệ ngủ so với nằm trên giường" 

                    },

                    { 

                        en: "Sleep Needed", vi: "Nhu cầu ngủ", val: "9:27", to: "sleep_needed", 

                        info: "Based on strain, debt & baseline", 

                        diengiai: "Dựa trên căng thẳng, nợ ngủ & cơ địa" 

                    },

                    { 

                        en: "Sleep Performance", vi: "Hiệu suất giấc ngủ", val: "84%", to: "sleep_perf", 

                        info: "Hours slept vs needed", 

                        diengiai: "Tỷ lệ ngủ được so với nhu cầu" 

                    },

                    { 

                        en: "Time in Bed", vi: "Thời gian trên giường", val: "7:17", to: "bed_time", 

                        info: "Total time from start to end", 

                        diengiai: "Tổng thời gian nằm trên giường" 

                    },

                    { 

                        en: "Weight", vi: "Cân nặng", val: "64.0", to: "weight", 

                        info: "Current body weight", 

                        diengiai: "Cân nặng hiện tại" 

                    }]
            }
        ]
    },
// --- TRANG 4: RECOVERY PAGE (HÌNH 1) ---
    recovery_page: {
        layout: [
            { 
                type: "HEADER_NAV", 
                back_to: "home",
                today: { en: "TODAY", vi: "HÔM NAY", to: "calendar_view" },
                // Nút (i) dẫn đến trang giải thích
                right_action: { icon: "i", to: "whoop_recovery_explain" }
            },
            // Vòng tròn 55% màu vàng
            {
                type: "HERO_RING_V2",
                val: "55", 
                color: "#ffcc00", // Màu vàng
                label: { en: "RECOVERY", vi: "PHỤC HỒI" },
                info: "Measure of your body's readiness to perform.", diengiai: "Thước đo mức độ sẵn sàng của cơ thể."
            },
            // Danh sách chỉ số chi tiết (Hình 1 dưới)
            {
                type: "METRIC_LIST_DETAILED",
                footer_status: { text: { en: "Today vs. last 30 days", vi: "Hôm nay vs 30 ngày qua" }, arrow: "▲", color: "#24ff00" }, // Dòng nhỏ dưới cùng
                rows: [
                    { 
                        icon: "⚡", title: { en: "HEART RATE VARIABILITY", vi: "BIẾN THIÊN NHỊP TIM" }, 
                        val: "41", sub: "42", arrow: "▼", color: "#ffaa00", // Màu cam
                        info: "HRV (ms)", diengiai: "HRV (ms)"
                    },
                    { 
                        icon: "❤️", title: { en: "RESTING HEART RATE", vi: "NHỊP TIM NGHỈ" }, 
                        val: "60", sub: "61", arrow: "▼", color: "#24ff00", // Màu xanh (RHR thấp là tốt)
                        info: "RHR (bpm)", diengiai: "RHR (bpm)"
                    },
                    { 
                        icon: "🫁", title: { en: "RESPIRATORY RATE", vi: "NHỊP THỞ" }, 
                        val: "13.4", sub: "13.8", arrow: "▼", color: "#24ff00", 
                        info: "rpm", diengiai: "lần/phút"
                    },
                    { 
                        icon: "☾", title: { en: "SLEEP PERFORMANCE", vi: "HIỆU SUẤT GIẤC NGỦ" }, 
                        val: "84%", sub: "75%", arrow: "▲", color: "#24ff00",
                        info: "Sleep score", diengiai: "Điểm giấc ngủ",to:"sleep_page"
                    }
                ]
            },
            // Hộp Insight
            {
                type: "INSIGHT_BOX",
                text: { 
                    en: "Your HRV (41 ms) and RHR (60 bpm) are within their usual ranges which resulted in a solid recovery. Today is a great day to build moderate Strain while staying on track with your sleep.",
                    vi: "HRV (41 ms) và RHR (60 bpm) nằm trong phạm vi bình thường, mang lại mức phục hồi ổn định. Hôm nay thích hợp để tập luyện vừa phải trong khi duy trì giấc ngủ tốt."
                },
                link: { en: "EXPLORE YOUR RECOVERY INSIGHTS", vi: "XEM PHÂN TÍCH PHỤC HỒI" }
            }
        ]
    },

    // --- TRANG 5: RECOVERY EXPLAIN (HÌNH 2, 3, 4, 5) ---
    whoop_recovery_explain: {
        layout: [
            { type: "HEADER_NAV", back_to: "recovery_page", title: { en: "RECOVERY", vi: "PHỤC HỒI" } },

            // Block 1: What is Recovery? (Hình 2 - Video thumbnail)
            {
                type: "EXPLAIN_BLOCK",
                title: { en: "What is Recovery?", vi: "Phục hồi là gì?" },
                // Placeholder cho Video Image (Ở đây mình dùng text mô tả thay video)
                visual: "recovery_gauge", // Dùng tạm Gauge để biểu thị mức độ
                text: {
                    en: "Recovery is a measure of how well the body adapts to physical, mental, and emotional stress.\n\nIt isn't a prescription on how much to work out, but rather an indicator of general well-being and your body's ability to adapt to life's stressors.",
                    vi: "Điểm Phục hồi thể hiện khả năng thích nghi của cơ thể với căng thẳng thể chất, tinh thần và cảm xúc.\n\nNó không phải là chỉ dẫn cho mức độ tập luyện, mà nó thể hiện khả năng thích nghi của bạn với các tác nhân gây mệt mỏi."
                }
            },

            // Block 2: Recovery Scale (Hình 3 - Màu xanh/vàng/đỏ)
            {
                type: "EXPLAIN_BLOCK",
                title: { en: "How is Recovery Measured?", vi: "Đo lường như thế nào?" },
                text: { en: "Recovery is reported on a 0-100% scale:", vi: "Phục hồi có thang đo từ 0-100%:" },
                items: [
                    { 
                        title: { en: "Sufficient (>67%)", vi: "Đủ (>67%)" }, color: "#24ff00",
                        desc: { en: "Your body is well recovered and ready to perform. Whether it's at work or the gym, your body is signaling it can handle a strenuous day.", vi: "Cơ thể đã hồi phục tốt và sẵn sàng hoạt động. Cơ thể báo hiệu có thể chịu đựng một ngày căng thẳng." }
                    },
                    { 
                        title: { en: "Adequate (34-66%)", vi: "Trung bình (34-66%)" }, color: "#ffcc00",
                        desc: { en: "Your body is maintaining health. You may not need rest and can still handle a moderately strenuous day.", vi: "Cơ thể đang duy trì sức khỏe. Bạn có thể không cần nghỉ ngơi và vẫn chịu được một ngày hoạt động vừa phải." }
                    },
                    { 
                        title: { en: "Low (< 33%)", vi: "Thấp (< 33%)" }, color: "#ff3b30",
                        desc: { en: "Your body is working hard to recover. Your body is signaling it needs an active rest day.", vi: "Cơ thể đang làm việc vất vả để phục hồi. Nó báo hiệu cần một ngày nghỉ ngơi nhiều." }
                    }
                ]
            },

            // Block 3: Calculation (Hình 4 - 4 Metrics)
            {
                type: "EXPLAIN_BLOCK",
                visual: "recovery_calc", // 4 Icon
                title: { en: "How is Recovery calculated?", vi: "Cách tính toán?" },
                text: { en: "Recovery is based on how fast you bounce back to baseline after a stressor like illness, strain, or stress. This baseline is based on 4 key metrics:", vi: "Được tính dựa trên tốc độ hồi phục về mức cơ bản sau mệt nhọc. Dựa trên 4 chỉ số chính:" },
                items: [
                    { title: {en:"Heart Rate Variability (HRV)", vi:"Biến thiên nhịp tim (HRV)"}, desc: {en:"The variance in time between your heartbeats.", vi:"Khoảng khác nhau trong thời gian mỗi nhịp tim đập."} },
                    { title: {en:"Resting Heart Rate (RHR)", vi:"Nhịp tim khi nghỉ (RHR)"}, desc: {en:"The number of times your heart beats per minute while at rest.", vi:"Số lần tim đập mỗi phút khi nghỉ ngơi."} },
                    { title: {en:"Respiratory Rate", vi:"Nhịp thở"}, desc: {en:"The number of breaths you take per minute while at rest.", vi:"Số lần thở mỗi phút khi nghỉ ngơi."} },
                    { title: {en:"(Hours of) Sleep", vi:"Giờ ngủ"}, desc: {en:"The hours of sleep you get a night. Sufficient sleep gives your body time to rest and recover.", vi:"Thời lượng ngủ mỗi đêm. Ngủ đủ giúp cơ thể nghỉ ngơi và phục hồi."} }
                ]
            },

            // Block 4: Improvement (Hình 5 - Grid Icons)
            {
                type: "EXPLAIN_BLOCK",
                title: { en: "How do I improve my Recovery?", vi: "Làm sao để cải thiện?" },
                visual: "recovery_improve", // Grid icon
                text: { 
                    en: "Recovery is affected by key factors such as recent strain, hydration, diet, stress, health, and fitness.\n\nYou can improve recovery with more sleep and a healthy diet. For example, hydrating sufficiently, limiting alcohol intake, and avoiding junk food.",
                    vi: "Phục hồi bị ảnh hưởng bởi căng thẳng, thiếu nước, chế độ ăn, stress và sức khỏe tổng quát.\n\nBạn có thể cải thiện bằng cách ngủ nhiều hơn và ăn uống lành mạnh. Ví dụ: uống đủ nước, hạn chế rượu bia và tránh đồ ăn vặt."
                }
            }
        ]
    },
    // --- 2. SLEEP PAGE (V2) ---
    // --- CẬP NHẬT TRANG SLEEP PAGE ---
    sleep_page: {
        layout: [
            { 
                type: "HEADER_NAV", 
                back_to: "home",
                today: { en: "TODAY", vi: "HÔM NAY", to: "calendar_view", info: "View Calendar", diengiai: "Xem lịch" },
                // [MỚI] Thêm nút (i) dẫn đến trang giải thích
                right_action: { icon: "i", to: "whoop_sleep_explain" }
            },
            // ... (Giữ nguyên các phần Hero Ring, Metrics...) ...
            {
                type: "HERO_RING_V2",
                val: "84", color: "#7ba1ba", 
                label: { en: "SLEEP PERFORMANCE", vi: "HIỆU SUẤT GIẤC NGỦ" },
                info: "Score calculated based on duration, efficiency, and consistency.",
                diengiai: "Điểm số được tính dựa trên thời lượng, hiệu quả và sự nhất quán của giấc ngủ."
            },
            {
                type: "METRIC_CARD_V2",
                legend: { poor: {en:"Poor"}, suff: {en:"Sufficient"}, opt: {en:"Optimal"} },
                rows: [
                    { icon: "☾", title: { en: "HOURS VS. NEEDED", vi: "GIỜ VS. NHU CẦU" }, val: "74%", status: "suff", level: 2, to: "sleep_need", info: "Comparison", diengiai: "So sánh" },
                    { icon: "☾", title: { en: "SLEEP CONSISTENCY", vi: "SỰ NHẤT QUÁN" }, val: "84%", status: "optimal", level: 3, to: "consistency", info: "Regularity", diengiai: "Sự đều đặn" },
                    { icon: "📊", title: { en: "SLEEP EFFICIENCY", vi: "HIỆU QUẢ GIẤC NGỦ" }, val: "95%", status: "optimal", level: 3, to: "efficiency", info: "Efficiency", diengiai: "Hiệu quả" },
                    { icon: "⚡", title: { en: "HIGH SLEEP STRESS", vi: "CĂNG THẲNG KHI NGỦ" }, val: "0%", status: "optimal", level: 3, to: "stress_monitor", info: "Stress", diengiai: "Căng thẳng" }
                ]
            },
            { type: "INSIGHT_BOX", text: { en: "Your sleep is good...", vi: "Giấc ngủ tốt..." }, link: { en: "EXPLORE INSIGHTS", vi: "XEM PHÂN TÍCH" } },
            { type: "SECTION_LABEL", label: { en: "Last Night's Sleep", vi: "Giấc ngủ đêm qua" } },
            {
                type: "GRAPH_V2",
                title: { en: "HOURS OF SLEEP", vi: "THỜI LƯỢNG NGỦ" },
                val: "6:57", range: "23:15 - 06:33",
                info: "Total sleep time", diengiai: "Tổng thời gian ngủ",
                stages: [
                    { name: {en:"AWAKE", vi:"TỈNH"}, percent: "4%", time: "0:20", colorClass: "col-awake" },
                    { name: {en:"LIGHT", vi:"NÔNG"}, percent: "57%", time: "4:02", colorClass: "col-light" },
                    { name: {en:"SWS (DEEP)", vi:"SÂU"}, percent: "18%", time: "1:20", colorClass: "col-deep" },
                    { name: {en:"REM", vi:"REM"}, percent: "21%", time: "1:35", colorClass: "col-rem" }
                ],
                restorative: { label: { en: "RESTORATIVE SLEEP", vi: "GIẤC NGỦ PHỤC HỒI" }, val: "2:55", sub_val: "3:06", arrow: "▼", arrow_color: "#ffaa00" }
            }
        ]
    },

    // --- [MỚI] TRANG GIẢI THÍCH (WHOOP SLEEP EXPLAIN) ---
    whoop_sleep_explain: {
        layout: [
            { type: "HEADER_NAV", back_to: "sleep_page", title: { en: "SLEEP", vi: "GIẤC NGỦ" } },
            
            // Phần 1: Sleep Performance là gì?
            {
                type: "EXPLAIN_BLOCK",
                title: { en: "What is Sleep Performance?", vi: "Hiệu suất Giấc ngủ là gì?" },
                text: { 
                    en: "Sleep Performance measures how well you slept last night while helping you optimize your sleep for better long-term health, factoring in sufficiency, consistency, efficiency, and sleep stress.",
                    vi: "Điểm Giấc ngủ thể hiện chất lượng giấc ngủ đêm qua, được tính bằng các yếu tố: Đủ giờ, Đúng giờ, Hiệu quả và Stress khi ngủ."
                },
                items: [
                    { 
                        title: { en: "Hours vs. Needed", vi: "Giờ ngủ vs Nhu cầu" },
                        desc: { en: "This is the percentage of your Sleep Need that you actually got the night before.", vi: "Đây là tỷ lệ giữa Giờ ngủ thực tế và Nhu cầu ngủ." }
                    },
                    { 
                        title: { en: "Sleep Consistency", vi: "Sự nhất quán" },
                        desc: { en: "This compares the timing of last night's sleep to the previous four days.", vi: "So sánh thời gian ngủ đêm qua với 4 ngày trước đó để đánh giá sự đều đặn." }
                    },
                    { 
                        title: { en: "Sleep Efficiency", vi: "Hiệu quả giấc ngủ" },
                        desc: { en: "This is the percentage of your time in bed that you actually spent asleep.", vi: "Tỷ lệ thời gian ngủ so với thời gian nằm trên giường." }
                    },
                    { 
                        title: { en: "Sleep Stress", vi: "Căng thẳng khi ngủ" },
                        desc: { en: "This is how much time you spent in high stress throughout the night.", vi: "Thời gian cơ thể bị Stress khi ngủ." }
                    }
                ]
            },

            // Phần 2: Cải thiện giấc ngủ (Ranges)
            {
                type: "EXPLAIN_BLOCK",
                title: { en: "How can I improve my sleep?", vi: "Làm thế nào để cải thiện?" },
                text: { en: "Each metric has a defined range for Poor, Sufficient, and Optimal.", vi: "Mỗi chỉ số đều có phạm vi xác định cho mức Kém, Đủ và Tối ưu." },
                items: [
                    { 
                        title: { en: "Hours vs. Needed", vi: "Giờ ngủ vs Nhu cầu" },
                        desc: { en: "- Optimal: 85%+\n- Sufficient: 70-85%\n- Poor: <70%", vi: "- Tối ưu: 85%+\n- Đủ: 70-85%\n- Kém: <70%" }
                    },
                    { 
                        title: { en: "Sleep Consistency", vi: "Sự nhất quán" },
                        desc: { en: "- Optimal: 80%+\n- Sufficient: 70-80%\n- Poor: <70%", vi: "- Tối ưu: 80%+\n- Đủ: 70-80%\n- Kém: <70%" }
                    },
                    { 
                        title: { en: "Sleep Stress", vi: "Căng thẳng khi ngủ" },
                        desc: { en: "- Optimal: <1%\n- Sufficient: 1-5%\n- Poor: >5%", vi: "- Tối ưu: <1%\n- Đủ: 1-5%\n- Kém: >5%" }
                    }
                ]
            },

            // Phần 3: Sleep Need là gì? (Có hình mô phỏng)
            {
                type: "EXPLAIN_BLOCK",
                visual: "sleep_need", // Kích hoạt vẽ hình Sleep Need
                title: { en: "What is sleep need?", vi: "Nhu cầu ngủ là gì?" },
                text: { 
                    en: "Sleep need is a personalized measure of how much sleep you need for peak performance. It's based on your unique physiology, recent strain, naps, and sleep debt.\n\nBaseline + Strain + Sleep Debt - Naps = Sleep Need",
                    vi: "WHOOP sẽ tuỳ vào từng người để tính ra số tối ưu.\n\nCơ bản + Căng thẳng + Nợ ngủ - Ngủ trưa = Nhu cầu"
                }
            },

            // Phần 4: Sleep Stages là gì? (Có hình mô phỏng)
            {
                type: "EXPLAIN_BLOCK",
                visual: "sleep_stages", // Kích hoạt vẽ hình Stages
                title: { en: "What are the sleep stages?", vi: "Các giai đoạn ngủ là gì?" },
                text: { en: "Monitoring your sleep ensures you're spending enough time in SWS and REM stages for restorative rest.", vi: "Theo dõi giấc ngủ đảm bảo bạn dành đủ thời gian cho giai đoạn Ngủ sâu (SWS) và REM để phục hồi tốt nhất." },
                items: [
                    { title: {en:"Awake", vi:"Tỉnh"}, desc: {en:"Brief periods in the night in which you are awake", vi:"Những khoảng thời gian ngắn bạn thức giấc trong đêm"} },
                    { title: {en:"Light Sleep", vi:"Ngủ nông"}, desc: {en:"The transitional stage between awake and restorative stages", vi:"Giai đoạn chuyển tiếp giữa thức và ngủ phục hồi"} },
                    { title: {en:"Deep/Slow Wave Sleep (SWS)", vi:"Ngủ sâu (SWS)"}, desc: {en:"A physically restorative state where your muscles repair and grow", vi:"Trạng thái phục hồi thể chất, nơi cơ bắp được sửa chữa và phát triển"} },
                    { title: {en:"REM Sleep", vi:"Ngủ REM"}, desc: {en:"A mentally restorative state where learning and memories are consolidated", vi:"Trạng thái phục hồi tinh thần, nơi củng cố trí nhớ và khả năng học tập"} }
                ]
            }
        ]
    },

    // --- 3. SLEEP NEED PAGE ---
    sleep_need: {
        layout: [
            { 
                type: "HEADER_NAV", back_to: "sleep_page", 
                title: { en: "SLEEP NEED", vi: "NHU CẦU NGỦ" }
            },
            {
                type: "SLEEP_NEED_CHART",
                title: { en: "HOURS VS. NEEDED", vi: "GIỜ VS. NHU CẦU" },
                info: "Detailed comparison of actual sleep vs needed sleep.", diengiai: "So sánh chi tiết giữa thời gian ngủ thực tế và nhu cầu ngủ.",
                percent: "74%", prev_percent: "66%", hours_val: "6:57", need_val: "9:27",
                labels: { hours: { en: "HOURS OF SLEEP", vi: "THỜI GIAN NGỦ" }, needed: { en: "SLEEP NEEDED", vi: "NHU CẦU NGỦ" } },
                breakdown: [
                    { label: {en: "Healthy Minimum", vi: "Tối thiểu lành mạnh"}, val: "7:34", color: "#3E4145", width: "80%" },
                    { label: {en: "Recent Strain", vi: "Căng thẳng gần đây"}, val: "+0:04", color: "#0091FF", width: "5%" },
                    { label: {en: "Sleep Debt", vi: "Nợ ngủ"}, val: "+1:49", color: "#AAB8C2", width: "15%" }
                ]
            }
        ]
    },
    // --- TRANG 6: STRAIN PAGE (HÌNH 0be52a) ---
    strain_page: {
        layout: [
            { 
                type: "HEADER_NAV", 
                back_to: "home",
                today: { en: "TODAY", vi: "HÔM NAY", to: "calendar_view" },
                right_action: { icon: "i", to: "whoop_strain_explain" }
            },
            // Vòng tròn 4.9 màu xanh dương
            {
                type: "HERO_RING_V2",
                val: "4.9", 
                color: "#0091ff", 
                label: { en: "STRAIN", vi: "CĂNG THẲNG" },
                info: "Measure of cardiovascular and muscular load.", diengiai: "Đo lường tải trọng tim mạch và cơ bắp."
            },
            // Danh sách chỉ số
            {
                type: "METRIC_LIST_DETAILED",
                footer_status: { text: { en: "Today vs. last 30 days", vi: "Hôm nay vs 30 ngày qua" }, arrow: "▲", color: "#24ff00" },
                rows: [
                    { 
                        icon: "♡", title: { en: "HEART RATE ZONES 1-3", vi: "VÙNG NHỊP TIM 1-3" }, 
                        val: "0:05", sub: "0:19", arrow: "▼", color: "#ffaa00",
                        info: "Low/Moderate intensity", diengiai: "Số phút có nhịp tim trong Cường độ thấp/vừa"
                    },
                    { 
                        icon: "♡", title: { en: "HEART RATE ZONES 4-5", vi: "VÙNG NHỊP TIM 4-5" }, 
                        val: "0:00", sub: "0:00", arrow: "●", color: "#888",
                        info: "High intensity", diengiai: "Cường độ cao"
                    },
                    { 
                        icon: "🏋️", title: { en: "STRENGTH ACTIVITY TIME", vi: "THỜI GIAN TẬP nặng" }, 
                        val: "0:00", sub: "0:00", arrow: "●", color: "#888",
                        info: "STRENGTH  time", diengiai: "Thời gian tập nặng"
                    },
                    { 
                        icon: "👟", title: { en: "STEPS", vi: "SỐ BƯỚC" }, 
                        val: "2,288", sub: "5,746", arrow: "▼", color: "#ffaa00",
                        info: "Pedometer", diengiai: "Đếm bước chân"
                    }
                ]
            },
            // Insight Box
            {
                type: "INSIGHT_BOX",
                text: { 
                    en: "You've made solid progress on your Strain today. A moderate activity could bring you closer to your optimal Strain range and improve overall fitness.",
                    vi: "Bạn đã đạt tiến bộ vững chắc về Strain hôm nay. Một hoạt động vừa phải có thể đưa bạn đến gần phạm vi Strain tối ưu và cải thiện thể lực tổng thể."
                },
                link: { en: "EXPLORE YOUR STRAIN INSIGHTS", vi: "XEM PHÂN TÍCH CĂNG THẲNG" }
            },
            // Hoạt động trong ngày
            {
                type: "STRAIN_ACTIVITY_ROW",
                title: { en: "Today's Activities", vi: "Hoạt động hôm nay" },
                name: { en: "OTHER", vi: "KHÁC" },
                val: "4.5", time_start: "8:32", time_end: "8:57",
                to: "activity_detail"
            },
            // Biểu đồ tuần
            {
                type: "WEEKLY_TREND_CHART",
                title: { en: "Weekly Trends", vi: "Xu hướng tuần" },
                data: [
                    { day: {en:"Sun", vi:"CN"}, val: 9.8 },
                    { day: {en:"Mon", vi:"T2"}, val: 6.9 },
                    { day: {en:"Tue", vi:"T3"}, val: 8.0 },
                    { day: {en:"Wed", vi:"T4"}, val: 6.0 },
                    { day: {en:"Thu", vi:"T5"}, val: 9.6 },
                    { day: {en:"Fri", vi:"T6"}, val: 6.4 },
                    { day: {en:"Sat", vi:"T7"}, val: 4.9, isToday: true }
                ]
            }
        ]
    },

    // --- TRANG 7: STRAIN EXPLAIN (CHI TIẾT ĐẦY ĐỦ) ---
    whoop_strain_explain: {
        layout: [
            { type: "HEADER_NAV", back_to: "strain_page", title: { en: "STRAIN", vi: "CĂNG THẲNG" } },

            // 1. What is Strain?
            {
                type: "EXPLAIN_BLOCK",
                title: { en: "What is Strain?", vi: "Strain là gì?" },
                text: { 
                    en: "Strain refers to the exertion you put on your body. Your Day Strain is the cumulative measure of all the Strain you build over the course of an entire day. This includes your activities, but also Strain you might accumulate from just going about your day.\n\nActivity Strain can be further broken down into cardiovascular and muscular load. Currently, only Strength Trainer activities show your muscular load.\n\nNote that Strain is logarithmic, not linear. This means that the Strain of individual activities won't add up to your total Day Strain. Instead, the higher your Strain gets, the harder it is to build more.",
                    vi: "Strain là mức gắng sức của cơ thể. Day Strain là thước đo tích lũy của tất cả Căng thẳng bạn tạo ra trong suốt cả ngày. Bao gồm các hoạt động tập luyện, và cả sinh hoạt thường ngày.\n\nActivity Strain có thể được chia nhỏ thành tải trọng tim mạch và tải trọng cơ bắp. Hiện tại, chỉ các hoạt động Strength Trainer mới hiển thị tải trọng cơ bắp.\n\nLưu ý rằng Strain tính theo hàm logarit, không phải tuyến tính. Nghĩa là Strain càng cao thì càng khó để tăng thêm." 
                }
            },

            // 2. How is Strain Measured? (0-21 Scale)
            {
                type: "EXPLAIN_BLOCK",
                title: { en: "How is Strain measured?", vi: "Đo lường như thế nào?" },
                visual: "strain_scale", // Hiển thị thanh màu 0-21
                text: { en: "Strain is measured on a scale from 0 to 21:", vi: "Strain được đo trên thang từ 0 đến 21:" },
                items: [
                    { 
                        title: {en:"Light (0-9)", vi:"Nhẹ (0-9)"}, 
                        desc: {en:"Minimal exertion is being put on the body, which encourages active recovery.", vi:"Gắng sức tối thiểu lên cơ thể, tốt cho phục hồi."} 
                    },
                    { 
                        title: {en:"Moderate (10-13)", vi:"Vừa (10-13)"}, 
                        desc: {en:"Moderate exertion is being put on the body, which balances fitness gains and recovery.", vi:"Gắng sức vừa phải lên cơ thể, cân bằng giữa tăng cường thể lực và phục hồi."} 
                    },
                    { 
                        title: {en:"High (14-17)", vi:"Cao (14-17)"}, 
                        desc: {en:"Increased exertion which builds fitness gains, but makes it more difficult for your body to recover the next day.", vi:"Gắng sức gia tăng giúp xây dựng thể lực, nhưng làm cơ thể khó phục hồi hơn vào ngày hôm sau."} 
                    },
                    { 
                        title: {en:"All Out (18-21)", vi:"Tối đa (18-21)"}, 
                        desc: {en:"Significant exertion which increases fitness gains, but puts your body at greater risk for injury or overtraining.", vi:"Gắng sức đáng kể giúp tăng thể lực, nhưng đặt cơ thể vào nguy cơ chấn thương hoặc quá tải cao hơn."} 
                    }
                ]
            },

            // 3. What is Day Strain?
            {
                type: "EXPLAIN_BLOCK",
                title: { en: "What is Day Strain?", vi: "Day Strain là gì?" },
                text: { 
                    en: "Day Strain is your total Strain accumulated over the course of the entire day, including activity (e.g. workouts) and non-activity (e.g. sleep, stress, or chores) Strain.\n\nAnything that gets your heart rate up or is tracked in the Strength Trainer, like the muscular load you build while working out, can contribute to your Day Strain. This is why you can wake up with a Strain from 0-4.\n\nStrain gives you valuable insight into how various stressors impact your heart and musculature. By understanding what strains your body most, you can better mitigate stress, manage your energy, and rest more effectively.",
                    vi: "Day Strain là tổng lượng Strain tích lũy trong cả ngày, bao gồm cả Strain từ hoạt động (tập luyện) và không hoạt động (ngủ, stress, việc nhà).\n\nBất cứ điều gì làm tăng nhịp tim hoặc được theo dõi trong Strength Trainer, như tải trọng cơ bắp khi tập gym, đều đóng góp vào Day Strain. Đó là lý do bạn có thể thức dậy với mức Strain từ 0-4.\n\nStrain cung cấp cái nhìn sâu sắc về cách các tác nhân gây căng thẳng ảnh hưởng đến tim và hệ cơ của bạn. Bằng cách hiểu điều gì gây căng thẳng nhất, bạn có thể giảm thiểu stress, quản lý năng lượng và nghỉ ngơi hiệu quả hơn." 
                }
            },

            // 4. What is Activity Strain?
            {
                type: "EXPLAIN_BLOCK",
                title: { en: "What is Activity Strain?", vi: "Activity Strain là gì?" },
                text: { 
                    en: "Activity Strain measures your cardiovascular exertion during an exercise activity. When you use Strength Trainer, Activity Strain can also quantify and account for your muscular exertion (muscular load). This gives you insight into how strenuous an activity was for you.\n\nDifferent activities put Strain on different parts of your body. For example, running builds more cardiovascular load, which can be measured by your heart rate. In contrast, weightlifting puts more Strain on your musculoskeletal system, which is measured as muscular load.\n\nIt's a personalized measure of how hard you worked, not what your body did. So, depending on your fitness level, an easy activity for you may be difficult for others.",
                    vi: "Activity Strain đo lường sự gắng sức tim mạch trong một hoạt động thể thao. Khi dùng Strength Trainer, nó cũng định lượng cả sự gắng sức cơ bắp (tải trọng cơ bắp). Điều này cho biết hoạt động đó vất vả thế nào đối với bạn.\n\nCác hoạt động khác nhau đặt áp lực lên các phần khác nhau. Ví dụ, chạy bộ tạo ra tải trọng tim mạch (đo bằng nhịp tim). Ngược lại, cử tạ đặt áp lực lên hệ cơ xương khớp (đo bằng tải trọng cơ bắp).\n\nĐây là thước đo cá nhân hóa về mức độ bạn đã cố gắng. Tùy thuộc vào thể lực, một bài tập dễ với bạn có thể là khó với người khác." 
                }
            },

            // 5. Muscular & Cardiovascular Load
            {
                type: "EXPLAIN_BLOCK",
                title: { en: "Muscular & Cardiovascular Load", vi: "Tải trọng Cơ bắp & Tim mạch" },
                visual: "strain_load", // Hiển thị thanh trượt Runner vs Weightlifter
                items: [
                    { 
                        title: {en:"Muscular Load", vi:"Tải trọng Cơ bắp"}, 
                        desc: {en:"Muscular load quantifies the exertion placed on your muscles, bones, joints, and tissues. It is quantified based on the volume and intensity of your training. Strength Trainer uses biomechanics to track the impact each exercise has on your body. Every movement has a unique movement profile and uses a different percentage of the total musculoskeletal system. For instance, a back squat has a different load profile than a calf raise because it uses more muscles and joints, creating higher muscular load.\n\nMost other strength training systems measure how much you lifted based on a 1-rep max model, whereas muscular load accounts for the cumulative effect of what the workout did to your body.", vi:"Định lượng sự gắng sức lên cơ, xương, khớp và mô, dựa trên khối lượng và cường độ tập. Strength Trainer dùng cơ sinh học để theo dõi tác động của từng bài tập. Mỗi chuyển động dùng một tỷ lệ cơ bắp khác nhau. Ví dụ, Squat tạo ra tải trọng cao hơn nhón gót vì dùng nhiều cơ và khớp hơn.\n\nHầu hết các hệ thống khác đo lường dựa trên mức tạ tối đa 1 lần lặp (1RM), trong khi tải trọng cơ bắp tính toán hiệu ứng tích lũy của buổi tập lên cơ thể bạn."} 
                    },
                    { 
                        title: {en:"Cardiovascular Load", vi:"Tải trọng Tim mạch"}, 
                        desc: {en:"Cardiovascular load is the demand you put on your cardiovascular system, as measured by your heart rate. It compares your resting heart rate and your max heart rate to provide an overall summary of the Strain on your cardiovascular system.", vi:"Là nhu cầu đặt lên hệ tim mạch, đo bằng nhịp tim. Nó so sánh nhịp tim nghỉ và nhịp tim tối đa của bạn để cung cấp tổng quan về mức độ căng thẳng lên hệ tim mạch."} 
                    }
                ]
            },

            // 6. How do I use Strain Target?
            {
                type: "EXPLAIN_BLOCK",
                title: { en: "How do I use Strain Target?", vi: "Dùng Strain Target thế nào?" },
                visual: "strain_target", // Hiển thị biểu đồ vùng
                text: {
                    en: "Based on your Recovery, Strain Target calculates an optimal Strain range to maximize performance without overtraining. Staying within this range will decrease your risk of injury or illness the next day. Within this range, you have a Strain target which will optimize your fitness gains.\n\nYou can build a workout and measure muscular load with Strength Trainer. After you finish, you will get a breakdown of how the exertion built during your workout was distributed between your cardiovascular and musculoskeletal systems.",
                    vi: "Dựa trên mức Phục hồi, Strain Target tính toán phạm vi Strain tối ưu để tối đa hóa hiệu suất mà không bị quá tải. Ở trong phạm vi này giúp giảm nguy cơ chấn thương hoặc đau bệnh vào ngày hôm sau, đồng thời tối ưu hóa việc tăng cường thể lực.\n\nBạn có thể tạo bài tập và đo tải trọng cơ bắp với Strength Trainer. Sau khi tập xong, bạn sẽ nhận được phân tích về cách phân bổ sự gắng sức giữa hệ tim mạch và hệ cơ xương khớp."
                }
            }
        ]
    },
   // --- TRANG 8: HEALTH PAGE (FULL TOOLTIPS) ---
    health_page: {
        layout: [
            { type: "HEADER_NAV", title: { en: "HEALTH", vi: "SỨC KHỎE" } },
            
            // 1. Whoop Age Hero
            {
                type: "WHOOP_AGE_HERO",
                val: "37.5",
                // Info cho chữ WHOOP AGE
                label_info: { 
                    info: "Your biological age based on biomarkers.", 
                    diengiai: "Tuổi sinh học dựa trên các chỉ số cơ thể." 
                },
                sub: {en: "2.3 years older", vi: "2.3 năm già hơn"},
                // Info cho dòng phụ (2.3 years older)
                sub_info: { 
                    info: "Comparison to your chronological age.", 
                    diengiai: "So sánh với tuổi thực tế của bạn." 
                }
            },
            
            // 2. Pace of Aging
            {
                type: "PACE_OF_AGING",
                title: { 
                    en: "PACE OF AGING", vi: "TỐC ĐỘ LÃO HÓA",
                    info: "Speed at which you are aging biologically.", 
                    diengiai: "Tốc độ lão hóa sinh học của cơ thể bạn."
                },
                badge: { 
                    en: "faster vs. last week", vi: "nhanh hơn tuần trước",
                    info: "Trend comparison", diengiai: "So sánh xu hướng"
                },
                val: "1.1",
                val_info: { // Info cho số 1.1x
                    info: "You are aging 1.1 years for every chronological year.",
                    diengiai: "Bạn đang già đi 1.1 tuổi sinh học mỗi năm thực tế."
                },
                btn: { 
                    en: "GO TO HEALTHSPAN", vi: "XEM CHI TIẾT SỨC KHỎE", to: "healthspan_detail",
                    info: "Detailed analysis", diengiai: "Phân tích chi tiết"
                }
            },
            
            // 3. Advanced Labs
            {
                type: "ADVANCED_LABS",
                title: { 
                    en: "ADVANCED LABS", vi: "CHỈ SỐ XÉT NGHIỆM",
                    info: "Biomarkers from your latest blood test.",
                    diengiai: "Các chỉ số sinh học từ xét nghiệm máu gần nhất."
                },
                total: "64/65",
                rows: [
                    { 
                        label: {en:"Optimal", vi:"Tối ưu"}, val: "38", bg: "rgba(36,255,0,0.2)", color: "#24ff00",
                        info: "Metrics in ideal range", diengiai: "Các chỉ số ở mức lý tưởng"
                    },
                    { 
                        label: {en:"Sufficient", vi:"Đủ"}, val: "12", bg: "rgba(102,204,255,0.2)", color: "#66ccff",
                        info: "Metrics in acceptable range", diengiai: "Các chỉ số ở mức chấp nhận được"
                    },
                    { 
                        label: {en:"! Out of Range", vi:"! Ngoài vùng"}, val: "14", bg: "rgba(255,170,0,0.2)", color: "#ffaa00",
                        info: "Metrics needing attention", diengiai: "Các chỉ số cần lưu ý đặc biệt"
                    }
                ],
                footer: "Last updated: Nov 12, 2025"
            },
            
            // 4. Health Monitor
            {
                type: "HEALTH_MONITOR_WIDGET",
                
                // [SỬA LẠI] Đưa 'to' ra ngoài này thì getAttr(comp) mới nhận diện được
                to: "health_monitor_detail", 

                title: { 
                    en: "HEALTH MONITOR", vi: "THEO DÕI SỨC KHỎE",
                    info: "Daily scan of 5 key vitals during sleep.", 
                    diengiai: "Quét 5 chỉ số sinh tồn quan trọng khi ngủ."
                    // Xóa 'to' ở trong này đi
                },
                footer: { 
                    en: "5/5 metrics within range", vi: "5/5 chỉ số trong phạm vi",
                    info: "All vitals are normal.", diengiai: "Tất cả chỉ số đều bình thường."
                },
                items: [
                    // Các items con có thể giữ 'to' hoặc bỏ cũng được, 
                    // vì thẻ cha (.hm-box) đã bắt sự kiện click rồi.
                    { icon: "🫁", name: {en:"RESP", vi:"HÔ HẤP"} }, 
                    { icon: "💧", name: {en:"SPO2", vi:"SPO2"} },
                    { icon: "❤️", name: {en:"RHR", vi:"RHR"} }, 
                    { icon: "⚡", name: {en:"HRV", vi:"HRV"} }, 
                    { icon: "🌡", name: {en:"TEMP", vi:"NHIỆT ĐỘ"} }
                ]
            },
            
            // 5. Blood Pressure
            {
                type: "SIMPLE_CARD",
                title: { 
                    en: "BLOOD PRESSURE INSIGHTS", vi: "HUYẾT ÁP",
                    info: "Daily estimation based on pulse wave analysis.", 
                    diengiai: "Ước tính hàng ngày dựa trên phân tích sóng mạch."
                },
                to: "bp_detail",
                badge: "BETA V2.0",
                sub_label: { 
                    en: "TODAY'S ESTIMATE", vi: "ƯỚC TÍNH HÔM NAY",
                    info: "Morning reading", diengiai: "Chỉ số buổi sáng"
                },
                val: "108/68",
                visual_bars: true
            },
            
            // 6. Heart Screener
            {
                type: "SIMPLE_CARD", layout: "row",
                title: { 
                    en: "HEART SCREENER", vi: "TẦM SOÁT TIM",
                    info: "Generate PDF reports for your doctor.", 
                    diengiai: "Tạo báo cáo PDF để gửi bác sĩ."
                },
                to: "ecg_detail",
                arrow: true, badge: "TAKE AN ECG >",
                sub_label: { 
                    en: "LAST ECG REPORT", vi: "BÁO CÁO ECG GẦN NHẤT",
                    info: "Result from last scan", diengiai: "Kết quả lần quét gần nhất"
                },
                val: { en: "Normal Sinus Rhythm", vi: "Nhịp xoang bình thường" },
                date: "Nov 22, 2025 - 9:46PM"
            },
            
            // 7. Stress Monitor
            {
                type: "SIMPLE_CARD",
                title: { 
                    en: "STRESS MONITOR", vi: "MỨC ĐỘ STRESS",
                    info: "Real-time stress levels based on HR and HRV.", 
                    diengiai: "Mức độ căng thẳng thời gian thực dựa trên nhịp tim và HRV."
                },
                to: "stress_page",
                arrow: true,
                sub_label: { 
                    en: "TODAY'S HIGH STRESS", vi: "STRESS CAO HÔM NAY",
                    info: "Duration of high stress zone", diengiai: "Thời lượng ở vùng căng thẳng cao"
                },
                val: "0:15", unit: "hrs",
                sub: "▼ vs. typical Sat",
                visual_graph: true
            },
            
            // 8. Disclaimer
            {
                type: "INSIGHT_BOX",
                text: { 
                    en: "The Heart Screener feature - ECG - is a medically regulated feature. Healthspan, Health Monitor... are not medical devices...",
                    vi: "Tính năng Tầm soát Tim - ECG - là tính năng được quy định y tế. Healthspan, Health Monitor... không phải thiết bị y tế..."
                }
            }
        ]
    },
    // --- TRANG 9: HEALTH MONITOR DETAIL (HÌNH 19f9a4) ---
    health_monitor_detail: {
        layout: [
            { 
                type: "HEADER_NAV", 
                back_to: "health_page", // Quay về trang Health chính
                title: { en: "HEALTH MONITOR", vi: "THEO DÕI SỨC KHỎE" } 
            },

            // 1. Live Heart Rate Chart
            {
                type: "HR_LIVE_CHART",
                icon: "💙",
                title: { en: "HEART RATE", vi: "NHỊP TIM" },
                title_info: { info: "Current beats per minute.", diengiai: "Số nhịp tim hiện tại mỗi phút." },
                val: "64",
                sub: { en: "Zone 0", vi: "Vùng 0" }
            },

            // 2. Grid Cards (5 chỉ số)
            {
                type: "HEALTH_GRID",
                items: [
                    {
                        icon: "🫁", title: { en: "RESPIRATORY RATE", vi: "NHỊP THỞ" },
                        val: "13.4", unit: "rpm",
                        status_text: { en: "low < 13.5", vi: "thấp < 13.5" },
                        status_bg: "rgba(36,255,0,0.1)", status_color: "#24ff00",
                        info: "Breaths per minute while asleep.", diengiai: "Số nhịp thở mỗi phút khi ngủ."
                    },
                    {
                        icon: "💧", title: { en: "BLOOD OXYGEN (SPO2)", vi: "NỒNG ĐỘ OXY MÁU" },
                        val: "93", unit: "%",
                        status_text: { en: "near 95% - 100%", vi: "gần 95% - 100%" },
                        status_bg: "rgba(36,255,0,0.1)", status_color: "#24ff00",
                        info: "Oxygen saturation level.", diengiai: "Mức độ bão hòa oxy trong máu."
                    },
                    {
                        icon: "❤️", title: { en: "RHR", vi: "NHỊP TIM NGHỈ" },
                        val: "60", unit: "bpm",
                        status_text: { en: "within 58 - 62", vi: "trong khoảng 58 - 62" },
                        status_bg: "rgba(36,255,0,0.1)", status_color: "#24ff00",
                        info: "Heart beats per minute at rest.", diengiai: "Nhịp tim mỗi phút khi nghỉ ngơi."
                    },
                    {
                        icon: "⚡", title: { en: "HRV", vi: "BIẾN THIÊN NHỊP TIM" },
                        val: "41", unit: "ms",
                        status_text: { en: "within 38 - 47", vi: "trong khoảng 38 - 47" },
                        status_bg: "rgba(36,255,0,0.1)", status_color: "#24ff00",
                        info: "Variance in time between beats.", diengiai: "Sự biến thiên thời gian giữa các nhịp tim."
                    },
                    {
                        icon: "🌡", title: { en: "SKIN TEMP", vi: "NHIỆT ĐỘ DA" },
                        val: "0.0", unit: "°C",
                        status_text: { en: "within -0.5 to +0.4", vi: "từ -0.5 đến +0.4" },
                        status_bg: "rgba(36,255,0,0.1)", status_color: "#24ff00",
                        info: "Deviation from your baseline.", diengiai: "Độ lệch so với mức nền tảng của bạn."
                    }
                ]
            },

            // 3. Share Report Button
            {
                type: "REPORT_ACTION",
                btn_text: { 
                    en: "SHARE YOUR HEALTH REPORT", vi: "CHIA SẺ BÁO CÁO SỨC KHỎE",
                    info: "Generate a PDF summary.", diengiai: "Tạo báo cáo tóm tắt định dạng PDF."
                },
                desc: { 
                    en: "Printable report for sharing with your doctor, physician, trainer, or anyone of your choosing.",
                    vi: "Báo cáo có thể in để chia sẻ với bác sĩ, huấn luyện viên hoặc bất kỳ ai bạn chọn."
                }
            }
        ]
    },
    // --- TRANG 10: HEALTHSPAN DETAIL (HÌNH 1a754c, 1a786f) ---
    healthspan_detail: {
        layout: [
            { 
                type: "HEADER_NAV", 
                back_to: "health_page", 
                title: { en: "HEALTHSPAN", vi: "TUỔI THỌ KHỎE MẠNH" },
                right_action: { icon: "i", to: "whoop_healthspan_explain" } // Có thể thêm trang explain nếu cần
            },

            // 1. Hero Blob
            {
                type: "HEALTHSPAN_HERO",
                val: "37.5",
                sub: "2.3 years older",
                poa_val: "1.1",
                info: { info: "Biological age", diengiai: "Tuổi sinh học" }
            },

            // 2. Insight Card
            {
                type: "HS_INSIGHT_CARD",
                title: { en: "Stay on Track", vi: "Giữ vững phong độ" },
                text: { 
                    en: "Your WHOOP Age has improved by 0.2 this week. Your Pace of Aging increased by 0.1 but remains steady. Keep an eye on Time in HR Zones 4-5.",
                    vi: "Tuổi WHOOP của bạn đã cải thiện 0.2 trong tuần này. Tốc độ lão hóa tăng 0.1 nhưng vẫn ổn định. Hãy chú ý đến thời gian trong Vùng nhịp tim 4-5." 
                },
                link: { en: "EXPLORE YOUR WEEKLY INSIGHTS", vi: "XEM PHÂN TÍCH TUẦN" }
            },

            // 3. Factor List: Sleep
            {
                type: "FACTOR_LIST",
                category: { en: "Sleep", vi: "Giấc ngủ" },
                items: [
                    {
                        title: { en: "SLEEP CONSISTENCY", vi: "SỰ NHẤT QUÁN" },
                        impact_val: "-1.7", // Màu xanh
                        val: "77%", pct: "77", // Vị trí marker (0-100)
                        range_start: "40%", range_end: "100%",
                        desc: { 
                            en: "Outperforming. You're significantly boosting your long-term health with your daily Sleep Consistency.",
                            vi: "Vượt trội. Bạn đang tăng cường đáng kể sức khỏe lâu dài nhờ sự nhất quán giấc ngủ hàng ngày."
                        }
                    },
                    {
                        title: { en: "HOURS OF SLEEP", vi: "THỜI LƯỢNG NGỦ" },
                        impact_val: "+0.8", // Màu vàng
                        val: "6:13", pct: "40",
                        range_start: "5h", range_end: "8h"
                    }
                ]
            },

            // 4. Factor List: Strain
            {
                type: "FACTOR_LIST",
                category: { en: "Strain", vi: "Căng thẳng" },
                items: [
                    {
                        title: { en: "TIME IN HR ZONES 1-3", vi: "THỜI GIAN VÙNG TIM 1-3" },
                        impact_val: "+0.4",
                        val: "0:55", pct: "30", range_start: "0h", range_end: "3h"
                    },
                    {
                        title: { en: "TIME IN HR ZONES 4-5", vi: "THỜI GIAN VÙNG TIM 4-5" },
                        impact_val: "+0.1",
                        val: "0:00", pct: "10", range_start: "0h", range_end: "1h"
                    },
                    {
                        title: { en: "STRENGTH ACTIVITY TIME", vi: "THỜI GIAN TẬP SỨC MẠNH" },
                        impact_val: "+1.5",
                        val: "0:00", pct: "5", range_start: "0h", range_end: "2h"
                    },
                    {
                        title: { en: "STEPS", vi: "SỐ BƯỚC CHÂN" },
                        impact_val: "+1.3",
                        val: "4,877", pct: "25", range_start: "0K", range_end: "16K"
                    }
                ]
            },

            // 5. Trend View Section (Hình 2)
            { type: "SECTION_LABEL", label: { en: "Trend View", vi: "Xu hướng" } },
            {
                type: "TREND_CHART_SIMPLE",
                title: { en: "WHOOP AGE TREND", vi: "XU HƯỚNG TUỔI WHOOP" },
                hasRefLine: true, // Đường trắng nằm ngang
                lineHeight: "60px", lineRotate: "-1deg", // Đường cam hơi nghiêng
                currentVal: "37.5", valTop: "20px"
            },
            {
                type: "TREND_CHART_SIMPLE",
                title: { en: "PACE OF AGING TREND", vi: "XU HƯỚNG TỐC ĐỘ LÃO HÓA" },
                hasRefLine: true,
                lineHeight: "40px", lineRotate: "2deg", // Đường cam nghiêng lên
                currentVal: "1.1x", valTop: "40px"
            },

            // 6. Edit Plan Card
            {
                type: "HS_INSIGHT_CARD",
                title: { en: "Edit Your Plan for Healthspan", vi: "Chỉnh sửa kế hoạch" },
                text: { 
                    en: "Edit your plan to focus on improving your Healthspan metrics.",
                    vi: "Chỉnh sửa kế hoạch để tập trung cải thiện các chỉ số Tuổi thọ khỏe mạnh của bạn." 
                },
                link: { en: "EDIT CURRENT PLAN", vi: "CHỈNH SỬA KẾ HOẠCH" }
            }
        ]
    },

    // --- TRANG 11: HEALTHSPAN EXPLAIN ---
    whoop_healthspan_explain: {
        layout: [
            { type: "HEADER_NAV", back_to: "healthspan_detail", title: { en: "HEALTHSPAN", vi: "TUỔI THỌ KHỎE MẠNH" } },

            // 1. What is Healthspan? (Video)
            {
                type: "EXPLAIN_BLOCK",
                title: { en: "What is Healthspan?", vi: "Healthspan là gì?" },
                visual: "wa_video",
                text: { 
                    en: "Your Healthspan is the number of years you live in good health. WHOOP Healthspan helps you understand how your daily choices affect your long-term health.\n\nHealthspan provides you with two measures—WHOOP Age and Pace of Aging—which are impacted by your daily habits, such as going to bed and waking up at the same time and how much time you spend doing strength-focused activities.",
                    vi: "Healthspan là số năm bạn sống với sức khỏe tốt. WHOOP Healthspan giúp bạn hiểu các thói quen hàng ngày ảnh hưởng thế nào đến sức khỏe lâu dài.\n\nHealthspan cung cấp 2 thước đo: Tuổi WHOOP và Tốc độ Lão hóa. Chúng bị ảnh hưởng bởi thói quen hàng ngày như giờ ngủ, giờ thức và thời gian tập luyện sức mạnh." 
                }
            },

            // 2. What is WHOOP Age? (Graph)
            {
                type: "EXPLAIN_BLOCK",
                title: { en: "What is WHOOP Age?", vi: "Tuổi WHOOP là gì?" },
                text: { 
                    en: "WHOOP Age gives you a quantitative measure of how your body is actually aging using your sleep, exercise, and fitness patterns over the last six months. Since WHOOP is processing six months of your data, it can make moving your WHOOP Age more difficult to do in the short-term.",
                    vi: "Tuổi WHOOP là thước đo định lượng về mức độ lão hóa thực tế của cơ thể, dựa trên giấc ngủ, tập luyện và thể lực trong 6 tháng qua. Vì xử lý dữ liệu dài hạn, việc thay đổi Tuổi WHOOP trong thời gian ngắn là rất khó."
                },
                visual: "wa_trend_graph",
                items: [
                    { 
                        title: {en:"Younger", vi:"Trẻ hơn"}, 
                        desc: {en:"(WHOOP Age is younger than Chronological Age): You're exceeding recommendations for good long-term health.", vi:"(Tuổi WHOOP < Tuổi thực): Bạn đang vượt mức khuyến nghị cho sức khỏe lâu dài."} 
                    },
                    { 
                        title: {en:"On Track", vi:"Đúng lộ trình"}, 
                        desc: {en:"(WHOOP Age is equal to Chronological Age): You're meeting recommendations for good long-term health.", vi:"(Tuổi WHOOP = Tuổi thực): Bạn đang đáp ứng các khuyến nghị sức khỏe."} 
                    },
                    { 
                        title: {en:"Older", vi:"Già hơn"}, 
                        desc: {en:"(WHOOP Age is older than Chronological Age): You're not meeting recommendations. Focus on improving behaviors.", vi:"(Tuổi WHOOP > Tuổi thực): Bạn chưa đáp ứng khuyến nghị. Hãy tập trung cải thiện thói quen."} 
                    }
                ]
            },

            // 3. What is Pace of Aging?
            {
                type: "EXPLAIN_BLOCK",
                title: { en: "What is Pace of Aging?", vi: "Tốc độ Lão hóa là gì?" },
                visual: "poa_meter_explain",
                text: { 
                    en: "Pace of Aging reflects how quickly your WHOOP Age is changing, measured on a scale from -1.0x to 3.0x—like a speedometer for your WHOOP Age.\n\nUnlike WHOOP Age, which changes gradually, Pace of Aging reflects your last 30 days of data—making it more responsive to recent habit changes.",
                    vi: "Phản ánh tốc độ thay đổi của Tuổi WHOOP, đo trên thang từ -1.0x đến 3.0x (như công tơ mét). Khác với Tuổi WHOOP thay đổi chậm, chỉ số này phản ánh dữ liệu 30 ngày qua, nên nhạy hơn với các thay đổi thói quen gần đây."
                },
                items: [
                    { title: {en:"Accelerated (>1.0x)", vi:"Tăng tốc (>1.0x)"}, desc: {en:"Your WHOOP Age is increasing faster than your chronological age.", vi:"Tuổi WHOOP đang tăng nhanh hơn tuổi thực."} },
                    { title: {en:"Steady (~1.0x)", vi:"Ổn định (~1.0x)"}, desc: {en:"Increasing at the same rate as chronological age.", vi:"Tăng cùng tốc độ với tuổi thực."} },
                    { title: {en:"Stable (~0.0x)", vi:"Đứng yên (~0.0x)"}, desc: {en:"Likely to stay the same even as chronological age increases.", vi:"Tuổi WHOOP có xu hướng giữ nguyên dù tuổi thực tăng."} },
                    { title: {en:"Reverse (<0.0x)", vi:"Đảo ngược (<0.0x)"}, desc: {en:"Your WHOOP Age is likely to decrease.", vi:"Tuổi WHOOP của bạn có khả năng giảm xuống."} }
                ]
            },

            // 4. How is it Calculated? (Impact Chart)
            {
                type: "EXPLAIN_BLOCK",
                title: { en: "How is WHOOP Age Calculated?", vi: "Cách tính toán?" },
                visual: "impact_chart",
                text: { 
                    en: "Healthspan uses nine key metrics to calculate your WHOOP Age. Each metric contributes to an Age Impact—the years added or subtracted based on how your metrics align with expert health recommendations.\n\nFor example: Excellent cardiovascular fitness might subtract 2.5 years. Not enough sleep could add 0.5 years.",
                    vi: "Sử dụng 9 chỉ số chính ảnh hưởng trực tiếp (cộng hoặc trừ số năm) dựa trên việc so sánh với khuyến nghị y tế.\n\nVí dụ: Thể lực tim mạch tốt có thể trừ 2.5 tuổi. Ngủ không đủ có thể cộng thêm 0.5 tuổi." 
                }
            },

            // 5. Metric Links
            {
                type: "EXPLAIN_BLOCK",
                title: { en: "Healthspan Metrics", vi: "Các chỉ số Healthspan" },
                text: { en: "There are three categories of metrics that contribute to your Healthspan.", vi: "Có 3 nhóm chỉ số đóng góp vào Healthspan của bạn." },
                links: [
                    { 
                        icon: "☾", title: {en:"Sleep", vi:"Giấc ngủ"}, 
                        desc: {en:"Understand the impact of your sleep patterns on long-term health.", vi:"Hiểu tác động của giấc ngủ đến sức khỏe lâu dài."},
                        link_text: {en:"MORE ABOUT SLEEP", vi:"XEM VỀ GIẤC NGỦ"}, to: "sleep_page"
                    },
                    { 
                        icon: "🏅", title: {en:"Strain", vi:"Căng thẳng"}, 
                        desc: {en:"Learn about how different types of movement impact long-term health.", vi:"Tìm hiểu các loại vận động ảnh hưởng thế nào đến sức khỏe."},
                        link_text: {en:"MORE ABOUT STRAIN", vi:"XEM VỀ STRAIN"}, to: "strain_page"
                    }
                ]
            },

            // 6. How does it update? (Calibration)
            {
                type: "EXPLAIN_BLOCK",
                title: { en: "How Does Healthspan Update?", vi: "Cập nhật thế nào?" },
                visual: "calibration_blob",
                text: { 
                    en: "Healthspan unlocks after 21 sleeps on WHOOP. While your data calibrates, your WHOOP Age may fluctuate.\n\nHealthspan, including WHOOP Age and Pace of Aging, will update every Sunday.",
                    vi: "Healthspan mở khóa sau 21 giấc ngủ. Trong khi hiệu chỉnh, Tuổi WHOOP có thể dao động.\n\nHealthspan, bao gồm Tuổi WHOOP và Tốc độ Lão hóa, sẽ được cập nhật vào Chủ nhật hàng tuần." 
                }
            }
        ]
    },
    
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
