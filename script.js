       // Data
        const complaintsData = [
            { id: 1247, title: 'حفرة كبيرة في شارع الجمهورية', type: 'roads', typeAr: 'الطرق والشوارع', district: 'east', districtAr: 'حي الشرق', location: 'شارع الجمهورية، بجوار مسجد النور', status: 'resolved', priority: 'high', date: '2026-01-15', description: 'توجد حفرة كبيرة وخطيرة في منتصف الشارع' },
            { id: 1248, title: 'انقطاع التيار الكهربائي المتكرر', type: 'electricity', typeAr: 'الكهرباء', district: 'manakh', districtAr: 'حي المناخ', location: 'شارع الحرية، عمارة 15', status: 'progress', priority: 'high', date: '2026-01-16', description: 'انقطاع متكرر للكهرباء لساعات طويلة يومياً' },
            { id: 1249, title: 'تسريب مياه الصرف الصحي', type: 'water', typeAr: 'المياه والصرف', district: 'arab', districtAr: 'حي العرب', location: 'شارع النيل، بجوار مدرسة الأمل', status: 'pending', priority: 'high', date: '2026-01-17', description: 'تسريب مياه صرف صحي في الشارع الرئيسي' },
            { id: 1250, title: 'تراكم القمامة لعدة أيام', type: 'cleanliness', typeAr: 'النظافة', district: 'west', districtAr: 'حي الغرب', location: 'شارع الميناء', status: 'progress', priority: 'medium', date: '2026-01-17', description: 'تراكم القمامة لمدة أسبوع دون جمع' },
            { id: 1251, title: 'إضاءة الشوارع معطلة', type: 'electricity', typeAr: 'الكهرباء', district: 'east', districtAr: 'حي الشرق', location: 'شارع البحر', status: 'pending', priority: 'low', date: '2026-01-18', description: 'أعمدة الإنارة معطلة منذ أسبوع' },
            { id: 1252, title: 'مياه راكدة في الشارع', type: 'water', typeAr: 'المياه والصرف', district: 'manakh', districtAr: 'حي المناخ', location: 'شارع السوق', status: 'resolved', priority: 'medium', date: '2026-01-14', description: 'مياه راكدة تسبب روائح كريهة وحشرات' }
        ];

        // Translations
        const translations = {
            ar: {
                loginTitle: 'منصة صوت صامت (Silent Voice)', loginSubtitle: 'نحو مدينة أفضل معاً', email: 'البريد الإلكتروني', password: 'كلمة المرور',
                rememberMe: 'تذكرني', forgotPassword: 'نسيت كلمة المرور؟', loginBtn: 'تسجيل الدخول', noAccount: 'ليس لديك حساب؟', register: 'إنشاء حساب',
                dashboardTitle: 'لوحة التحكم', welcomeMsg: 'مرحبا..... ', navDashboard: 'لوحة التحكم', navComplaint: 'تقديم شكوى', navComplaints: 'جميع الشكاوي',
                totalComplaints: 'إجمالي الشكاوي', inProgress: 'جاري المعالجة', resolved: 'تم الحل', responseTime: 'سرعة الرد', fromLastMonth: 'من الشهر الماضي',
                beingProcessed: 'يتم العمل عليها', resolutionRate: 'نسبة الحل', improved: 'تحسن', complaintsByType: 'الشكاوي حسب النوع',
                roadsAndStreets: 'الطرق والشوارع', electricity: 'الكهرباء', waterAndSanitation: 'المياه والصرف', cleanliness: 'النظافة',
                recentActivity: 'النشاط الأخير', complaintResolved: 'تم حل شكوى #1247', complaintInProgress: 'شكوى جديدة قيد المراجعة #1248',
                highPriority: 'شكوى عالية الأولوية #1249', submitComplaint: 'تقديم شكوى جديدة', fillForm: 'أملأ النموذج التالي',
                complaintTitle: 'عنوان الشكوى', complaintType: 'نوع المشكلة', selectType: 'اختر نوع المشكلة', other: 'أخرى', district: 'الحي',
                selectDistrict: 'اختر الحي', location: 'الموقع التفصيلي', description: 'تفاصيل الشكوى', attachImage: 'إرفاق صورة',
                dragDrop: 'اسحب الصورة هنا أو انقر للتحميل', submitComplaintBtn: 'تقديم الشكوى', resetForm: 'إعادة تعيين',
                trackComplaint: 'تتبع شكواك', track: 'تتبع', allComplaints: 'جميع الشكاوي', totalRecords: 'سجل', allStatuses: 'كل الحالات',
                pending: 'قيد الانتظار', inProgress: 'جاري المعالجة', allTypes: 'كل الأنواع', allPriorities: 'كل الأولويات',
                highPriorityOpt: 'عالية', mediumPriorityOpt: 'متوسطة', lowPriorityOpt: 'منخفضة', allDistricts: 'كل الأحياء',
                statusPending: 'قيد الانتظار', statusProgress: 'جاري المعالجة', statusResolved: 'تم الحل', complaintNumber: 'رقم الشكوى'
            },
            en: {
                loginTitle: 'Port Said Complaints Platform', loginSubtitle: 'Towards a better city together', email: 'Email Address', password: 'Password',
                rememberMe: 'Remember me', forgotPassword: 'Forgot password?', loginBtn: 'Sign In', noAccount: "Don't have an account?", register: 'Create account',
                dashboardTitle: 'Dashboard', welcomeMsg: 'Welcome, Ahmed Mohamed', navDashboard: 'Dashboard', navComplaint: 'Submit Complaint', navComplaints: 'All Complaints',
                totalComplaints: 'Total Complaints', inProgress: 'In Progress', resolved: 'Resolved', responseTime: 'Response Time', fromLastMonth: 'from last month',
                beingProcessed: 'Being processed', resolutionRate: 'Resolution rate', improved: 'Improved', complaintsByType: 'Complaints by Type',
                roadsAndStreets: 'Roads & Streets', electricity: 'Electricity', waterAndSanitation: 'Water & Sanitation', cleanliness: 'Cleanliness',
                recentActivity: 'Recent Activity', complaintResolved: 'Complaint #1247 resolved', complaintInProgress: 'New complaint under review #1248',
                highPriority: 'High priority complaint #1249', submitComplaint: 'Submit New Complaint', fillForm: 'Fill the form below',
                complaintTitle: 'Complaint Title', complaintType: 'Problem Type', selectType: 'Select problem type', other: 'Other', district: 'District',
                selectDistrict: 'Select district', location: 'Detailed Location', description: 'Complaint Details', attachImage: 'Attach Image',
                dragDrop: 'Drag image here or click to upload', submitComplaintBtn: 'Submit Complaint', resetForm: 'Reset Form',
                trackComplaint: 'Track Your Complaint', track: 'Track', allComplaints: 'All Complaints', totalRecords: 'records', allStatuses: 'All Statuses',
                pending: 'Pending', inProgress: 'In Progress', allTypes: 'All Types', allPriorities: 'All Priorities',
                highPriorityOpt: 'High', mediumPriorityOpt: 'Medium', lowPriorityOpt: 'Low', allDistricts: 'All Districts',
                statusPending: 'Pending', statusProgress: 'In Progress', statusResolved: 'Resolved', complaintNumber: 'Complaint #'
            }
        };

        // State
        let currentLang = 'ar';
        let currentTheme = 'dark';

        // Theme Toggle
        function toggleTheme() {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', currentTheme);
            updateThemeIcons();
            localStorage.setItem('theme', currentTheme);
        }

        function updateThemeIcons() {
            const sunPath = 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z';
            const moonPath = 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z';
            const path = currentTheme === 'dark' ? sunPath : moonPath;
            document.querySelectorAll('[id^="themeIcon"]').forEach(icon => {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="' + path + '"/>';
            });
        }

        // Language Toggle
        function toggleLanguage() {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            document.documentElement.setAttribute('lang', currentLang);
            document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
            document.body.style.fontFamily = currentLang === 'ar' ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif";
            
            document.querySelectorAll('[id^="langBtn"]').forEach(btn => {
                btn.textContent = currentLang === 'ar' ? 'EN' : 'ع';
            });
            
            updateTranslations();
            renderComplaints(complaintsData);
            localStorage.setItem('lang', currentLang);
        }

        function updateTranslations() {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) {
                    el.textContent = translations[currentLang][key];
                }
            });
        }

        // Page Navigation
        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.add('active');
            }
            window.scrollTo(0, 0);
        }

        // File Upload
        const fileUpload = document.getElementById('fileUpload');
        const fileInput = document.getElementById('fileInput');
        const imagePreview = document.getElementById('imagePreview');
        const previewImg = document.getElementById('previewImg');

        if (fileUpload && fileInput) {
            fileUpload.addEventListener('click', () => fileInput.click());
            fileUpload.addEventListener('dragover', (e) => { e.preventDefault(); fileUpload.style.borderColor = 'var(--accent)'; });
            fileUpload.addEventListener('dragleave', () => { fileUpload.style.borderColor = 'var(--border)'; });
            fileUpload.addEventListener('drop', (e) => {
                e.preventDefault();
                fileUpload.style.borderColor = 'var(--border)';
                if (e.dataTransfer.files.length > 0) handleFile(e.dataTransfer.files[0]);
            });
            fileInput.addEventListener('change', (e) => {
                if (e.target.files.length > 0) handleFile(e.target.files[0]);
            });
        }

        function handleFile(file) {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    previewImg.src = e.target.result;
                    imagePreview.classList.remove('hidden');
                    fileUpload.style.display = 'none';
                };
                reader.readAsDataURL(file);
            }
        }

        function removeImage() {
            imagePreview.classList.add('hidden');
            fileUpload.style.display = 'block';
            fileInput.value = '';
        }

        // Tracking
        function trackComplaint() {
            const input = document.getElementById('trackingInput');
            const result = document.getElementById('trackingResult');
            const id = parseInt(input.value.replace('#', ''));
            const complaint = complaintsData.find(c => c.id === id);
            
            if (complaint) {
                const statusClass = complaint.status === 'pending' ? 'status-pending' : 
                                   complaint.status === 'progress' ? 'status-progress' : 'status-resolved';
                const statusText = complaint.status === 'pending' ? (currentLang === 'ar' ? 'قيد الانتظار' : 'Pending') :
                                  complaint.status === 'progress' ? (currentLang === 'ar' ? 'جاري المعالجة' : 'In Progress') : (currentLang === 'ar' ? 'تم الحل' : 'Resolved');
                
                result.innerHTML = 
                    '<div class="p-4 bg-[var(--bg-secondary)] rounded-xl">' +
                        '<div class="flex items-center justify-between mb-3">' +
                            '<h4 class="font-bold">#' + complaint.id + '</h4>' +
                            '<span class="status-badge ' + statusClass + '">' + statusText + '</span>' +
                        '</div>' +
                        '<p class="font-medium mb-1">' + complaint.title + '</p>' +
                        '<p class="text-sm text-[var(--fg-secondary)]">' + complaint.location + '</p>' +
                        '<div class="timeline-item mt-4">' +
                            '<p class="text-sm font-medium">' + (currentLang === 'ar' ? 'تم استلام الشكوى' : 'Complaint received') + '</p>' +
                            '<p class="text-xs text-[var(--fg-secondary)]">' + complaint.date + '</p>' +
                        '</div>' +
                        (complaint.status !== 'pending' ? 
                        '<div class="timeline-item">' +
                            '<p class="text-sm font-medium">' + (currentLang === 'ar' ? 'جاري المراجعة' : 'Under review') + '</p>' +
                        '</div>' : '') +
                        (complaint.status === 'resolved' ? 
                        '<div class="timeline-item">' +
                            '<p class="text-sm font-medium text-[var(--success)]">' + (currentLang === 'ar' ? 'تم الحل' : 'Resolved') + '</p>' +
                        '</div>' : '') +
                    '</div>';
                result.classList.remove('hidden');
            } else {
                result.innerHTML = '<div class="p-4 bg-[var(--danger)] bg-opacity-10 rounded-xl text-center"><p class="text-[var(--danger)]">' + (currentLang === 'ar' ? 'لم يتم العثور على شكوى' : 'Complaint not found') + '</p></div>';
                result.classList.remove('hidden');
            }
        }

        // Render Complaints
        function renderComplaints(data) {
            const list = document.getElementById('complaintsList');
            if (!list) return;
            
            list.innerHTML = data.map((c, i) => {
                const statusClass = c.status === 'pending' ? 'status-pending' : c.status === 'progress' ? 'status-progress' : 'status-resolved';
                const statusText = c.status === 'pending' ? (currentLang === 'ar' ? 'قيد الانتظار' : 'Pending') : c.status === 'progress' ? (currentLang === 'ar' ? 'جاري المعالجة' : 'In Progress') : (currentLang === 'ar' ? 'تم الحل' : 'Resolved');
                const priorityClass = 'priority-' + c.priority;
                const priorityText = c.priority === 'high' ? (currentLang === 'ar' ? 'عالية' : 'High') : c.priority === 'medium' ? (currentLang === 'ar' ? 'متوسطة' : 'Medium') : (currentLang === 'ar' ? 'منخفضة' : 'Low');
                
                return '<div class="glass-card p-4 ' + priorityClass + ' animate-in" style="animation-delay: ' + (i * 0.05) + 's">' +
                    '<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">' +
                        '<div class="flex-1">' +
                            '<div class="flex items-center gap-2 mb-1">' +
                                '<span class="text-[var(--accent)] font-bold text-sm">#' + c.id + '</span>' +
                                '<span class="status-badge ' + statusClass + '">' + statusText + '</span>' +
                            '</div>' +
                            '<h3 class="font-bold text-sm mb-0.5">' + c.title + '</h3>' +
                            '<p class="text-xs text-[var(--fg-secondary)]">' + c.location + '</p>' +
                        '</div>' +
                        '<div class="flex flex-wrap gap-2 text-xs">' +
                            '<div class="px-2 py-1 rounded-lg bg-[var(--bg-secondary)]"><span class="text-[var(--fg-secondary)]">' + c.typeAr + '</span></div>' +
                            '<div class="px-2 py-1 rounded-lg bg-[var(--bg-secondary)]"><span class="text-[var(--fg-secondary)]">' + c.districtAr + '</span></div>' +
                            '<div class="px-2 py-1 rounded-lg bg-[var(--bg-secondary)]"><span>' + priorityText + '</span></div>' +
                            '<div class="px-2 py-1 rounded-lg bg-[var(--bg-secondary)]"><span class="text-[var(--fg-secondary)]">' + c.date + '</span></div>' +
                        '</div>' +
                    '</div>' +
                '</div>';
            }).join('');
        }

        function filterComplaints() {
            const status = document.getElementById('filterStatus').value;
            const type = document.getElementById('filterType').value;
            const priority = document.getElementById('filterPriority').value;
            const district = document.getElementById('filterDistrict').value;
            
            let filtered = complaintsData;
            if (status) filtered = filtered.filter(c => c.status === status);
            if (type) filtered = filtered.filter(c => c.type === type);
            if (priority) filtered = filtered.filter(c => c.priority === priority);
            if (district) filtered = filtered.filter(c => c.district === district);
            
            renderComplaints(filtered);
        }

        // Form Handlers
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            showPage('dashboardPage');
        });

        document.getElementById('complaintForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert(currentLang === 'ar' ? 'تم تقديم الشكوى بنجاح! رقم الشكوى: #1253' : 'Complaint submitted successfully! ID: #1253');
            e.target.reset();
            removeImage();
        });

        // Init
        function init() {
            const savedTheme = localStorage.getItem('theme');
            const savedLang = localStorage.getItem('lang');
            
            if (savedTheme) {
                currentTheme = savedTheme;
                document.documentElement.setAttribute('data-theme', currentTheme);
                updateThemeIcons();
            }
            
            if (savedLang) {
                currentLang = savedLang;
                document.documentElement.setAttribute('lang', currentLang);
                document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
                document.body.style.fontFamily = currentLang === 'ar' ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif";
                document.querySelectorAll('[id^="langBtn"]').forEach(btn => { btn.textContent = currentLang === 'ar' ? 'EN' : 'ع'; });
                updateTranslations();
            }
            
            renderComplaints(complaintsData);
        }

        document.addEventListener('DOMContentLoaded', init);