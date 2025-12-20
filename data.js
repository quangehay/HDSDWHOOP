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

                        en: "Heart Rate Variability", vi: "Biến thiên nhịp tim", val: "41", to: "hrv_detail", 

                        info: "Time variance between beats (ms)", 

                        diengiai: "Biến thiên thời gian giữa các nhịp tim" 

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
                    vi: "Phục hồi là thước đo khả năng thích ứng của cơ thể với căng thẳng thể chất, tinh thần và cảm xúc.\n\nNó không phải là đơn thuốc về lượng bài tập, mà là chỉ số về sức khỏe tổng quát và khả năng thích nghi của bạn."
                }
            },

            // Block 2: Recovery Scale (Hình 3 - Màu xanh/vàng/đỏ)
            {
                type: "EXPLAIN_BLOCK",
                title: { en: "How is Recovery Measured?", vi: "Đo lường như thế nào?" },
                text: { en: "Recovery is reported on a 0-100% scale:", vi: "Phục hồi được báo cáo trên thang đo 0-100%:" },
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
                        desc: { en: "Your body is working hard to recover. Your body is signaling it needs an active rest day.", vi: "Cơ thể đang làm việc vất vả để phục hồi. Nó báo hiệu cần một ngày nghỉ ngơi tích cực." }
                    }
                ]
            },

            // Block 3: Calculation (Hình 4 - 4 Metrics)
            {
                type: "EXPLAIN_BLOCK",
                visual: "recovery_calc", // 4 Icon
                title: { en: "How is Recovery calculated?", vi: "Cách tính toán?" },
                text: { en: "Recovery is based on how fast you bounce back to baseline after a stressor like illness, strain, or stress. This baseline is based on 4 key metrics:", vi: "Phục hồi dựa trên tốc độ quay về mức cơ bản sau căng thẳng. Dựa trên 4 chỉ số chính:" },
                items: [
                    { title: {en:"Heart Rate Variability (HRV)", vi:"Biến thiên nhịp tim (HRV)"}, desc: {en:"The variance in time between your heartbeats.", vi:"Sự biến thiên về thời gian giữa các nhịp tim."} },
                    { title: {en:"Resting Heart Rate (RHR)", vi:"Nhịp tim nghỉ (RHR)"}, desc: {en:"The number of times your heart beats per minute while at rest.", vi:"Số lần tim đập mỗi phút khi nghỉ ngơi."} },
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
                    vi: "Phục hồi bị ảnh hưởng bởi căng thẳng, nước, chế độ ăn, stress và sức khỏe.\n\nBạn có thể cải thiện bằng cách ngủ nhiều hơn và ăn uống lành mạnh. Ví dụ: uống đủ nước, hạn chế rượu bia và tránh đồ ăn vặt."
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
                    vi: "Hiệu suất Giấc ngủ đo lường chất lượng giấc ngủ đêm qua, giúp bạn tối ưu hóa giấc ngủ cho sức khỏe lâu dài, dựa trên các yếu tố: sự đầy đủ, nhất quán, hiệu quả và mức độ căng thẳng."
                },
                items: [
                    { 
                        title: { en: "Hours vs. Needed", vi: "Giờ ngủ vs Nhu cầu" },
                        desc: { en: "This is the percentage of your Sleep Need that you actually got the night before.", vi: "Đây là tỷ lệ phần trăm Nhu cầu Ngủ mà bạn thực sự đạt được đêm qua." }
                    },
                    { 
                        title: { en: "Sleep Consistency", vi: "Sự nhất quán" },
                        desc: { en: "This compares the timing of last night's sleep to the previous four days.", vi: "So sánh thời gian ngủ đêm qua với 4 ngày trước đó để đánh giá sự đều đặn." }
                    },
                    { 
                        title: { en: "Sleep Efficiency", vi: "Hiệu quả giấc ngủ" },
                        desc: { en: "This is the percentage of your time in bed that you actually spent asleep.", vi: "Tỷ lệ phần trăm thời gian bạn nằm trên giường thực sự dùng để ngủ." }
                    },
                    { 
                        title: { en: "Sleep Stress", vi: "Căng thẳng khi ngủ" },
                        desc: { en: "This is how much time you spent in high stress throughout the night.", vi: "Thời gian cơ thể bạn rơi vào trạng thái căng thẳng cao trong suốt đêm." }
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
                    vi: "Nhu cầu ngủ là thước đo cá nhân hóa về lượng thời gian ngủ bạn cần để đạt hiệu suất đỉnh cao. Nó dựa trên sinh lý học, sự căng thẳng gần đây, giấc ngủ trưa và nợ ngủ.\n\nCơ bản + Căng thẳng + Nợ ngủ - Ngủ trưa = Nhu cầu"
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
