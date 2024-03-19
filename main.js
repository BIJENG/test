(()=>{
    let index = 0;
    let yOffset = 0;
    let curSection = 0;
    let sectionYOffset = 0;

    let home = document.querySelector('#main-home');
    let intro = document.querySelector('#main-intro');
    let video = document.querySelector('#main-video');
    let help = document.querySelector('#main-help');
    
    let elements = document.querySelectorAll('.main-nav-link');
    let elements2 = document.querySelectorAll('.material-link'); 

    // 각 요소에 대해 이벤트를 추가합니다.
    elements.forEach(function(element) {
        // 마우스가 요소 위에 올라갔을 때 이벤트를 추가합니다.
        element.addEventListener('mouseover', function() {
            // 요소의 배경색을 변경합니다.
            element.style.backgroundColor = 'lightblue';
        });

        // 마우스가 요소 위에서 벗어났을 때 이벤트를 추가합니다.
        element.addEventListener('mouseout', function() {
            // 요소의 배경색을 원래대로 되돌립니다.
            element.style.backgroundColor = 'initial';
        });
    });

    elements2.forEach(function(element2) {
        // 마우스가 요소 위에 올라갔을 때 이벤트를 추가합니다.
        element2.addEventListener('mouseover', function() {
            // 요소의 배경색을 변경합니다.
            element2.style.backgroundColor = 'lightblue';
        });

        // 마우스가 요소 위에서 벗어났을 때 이벤트를 추가합니다.
        element2.addEventListener('mouseout', function() {
            // 요소의 배경색을 원래대로 되돌립니다.
            element2.style.backgroundColor = 'initial';
        });
    });

    elements2.forEach(function(element2) {
        // 비디오 요소 생성
        let videoElement = document.createElement('video');
        videoElement.src = './video/virtual_robot.mp4';
        videoElement.style.width = '200px'; // 비디오의 너비 설정
        videoElement.style.position = 'absolute'; // 절대 위치 설정
        videoElement.style.left = '150px';
        videoElement.style.display = 'none'; // 초기에는 보이지 않도록 설정
        element2.appendChild(videoElement); // 요소에 비디오 요소 추가
    
        // 마우스가 요소 위에 올라갔을 때 이벤트를 추가합니다.
        element2.addEventListener('mouseover', function() {
            // 비디오 요소를 보이도록 변경
            videoElement.style.display = 'block';
            // 비디오 재생
            videoElement.play();
        });
    
        // 마우스가 요소 위에서 벗어났을 때 이벤트를 추가합니다.
        element2.addEventListener('mouseout', function() {
            // 비디오 정지
            videoElement.pause();
            // 비디오를 숨김
            videoElement.style.display = 'none';
        });
    });

    home.addEventListener('click', () => {
        window.scrollTo({ top: 10, behavior: 'smooth' });
    });

    intro.addEventListener('click', () => {
        window.scrollTo({ top: 308, behavior: 'smooth' });
    });

    video.addEventListener('click', () => {
        window.scrollTo({ top: 3240, behavior: 'smooth' });
    });

    help.addEventListener('click', () => {
        window.scrollTo({ top: 4400, behavior: 'smooth' });
    });

    document.addEventListener('DOMContentLoaded', function() {
        var links = document.querySelectorAll('.main-nav-link.a');
        links.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // 기본 동작 방지
                // 추가로 수행할 작업들을 여기에 작성할 수 있습니다.
            });
        });
    });

    let currentIndex = 0; // 현재 메뉴의 인덱스
    const totalMenus = 5; // 전체 메뉴 개수
    const menuContainer = document.querySelector('.section1-menu'); // 메뉴 컨테이너
    const menuMessages = document.querySelectorAll('.section1-menu-message'); // 메뉴 메시지들
    const nextButton = document.getElementById('next'); // 다음 버튼
    const prevButton = document.getElementById('before'); // 이전 버튼

    // 다음 메뉴로 이동하는 함수
    function goToNextMenu() {
        currentIndex = (currentIndex + 1) % totalMenus; // 다음 인덱스 계산
        updateMenuDisplay(); // 메뉴 업데이트
    }

    // 이전 메뉴로 이동하는 함수
    function goToPrevMenu() {
        currentIndex = (currentIndex - 1 + totalMenus) % totalMenus; // 이전 인덱스 계산
        updateMenuDisplay(); // 메뉴 업데이트
    }

    // 메뉴를 업데이트하는 함수
    function updateMenuDisplay() {
        // 현재 메뉴의 인덱스를 기준으로 메뉴들을 순환하며 보이도록 설정
        for (let i = 0; i < totalMenus; i++) {
            menuMessages[i].style.display = i >= currentIndex && i < currentIndex + 3 ? 'block' : 'none';
        }
    }

    // 다음 버튼 클릭 이벤트
    nextButton.addEventListener('click', () => {
        goToNextMenu();
    });

    // 이전 버튼 클릭 이벤트
    prevButton.addEventListener('click', () => {
        goToPrevMenu();
    });

    // 초기에 첫 번째 메뉴 보이도록 설정
    updateMenuDisplay();

    function search() {
        let searchTerm = document.getElementById("searchInput").value;
        
        
        console.log("검색어:", searchTerm);
        
        let searchResultsDiv = document.getElementById("searchResults");
        searchResultsDiv.innerHTML = "검색 결과: " + searchTerm;
    }

    document.getElementById("main-chanel").addEventListener("click", function() {
        var recommendedChannels = document.getElementById("recommendedChannels");
        if (recommendedChannels.style.display === "none") {
            recommendedChannels.style.display = "block";
        } else {
            recommendedChannels.style.display = "none";
        }
    });

    const sectionSet = [

        {
            height : 0,
            multiple : 2,

            objs : {
                
                container : document.querySelector('#section0-script'),
                sec0_messageA : document.querySelector('.section0-message.a'),
                sec0_messageB : document.querySelector('.section0-message.b'),
                sec0_messageC : document.querySelector('.section0-message.c'),
                sec0_messageD : document.querySelector('.section0-message.d'),
                sec0_messageE : document.querySelector('.section0-message.e'),
                sec0_message : document.querySelector('.section0-message'),
                
                

            },

            vals : {
                texts : ['We are All Virtual Entertainer !','당신을 Vitual World 로 초대합니다 !!!'],


                //점점 밝아짐
                sec0_messageA_opacity_in : [1, 1, {start : 0.05, end : 0.14}],
                sec0_messageA_opacity_out : [1, 0, {start : 0.15, end : 0.24}],
                sec0_messageA_translate1 : [0, -30, {start : 0.05, end : 0.14}],
                sec0_messageA_translate2 : [-30, -60, {start : 0.15, end : 0.24}],

                sec0_messageB_opacity_in : [0, 1, {start : 0.25, end : 0.34}],
                sec0_messageB_opacity_out : [1, 0, {start : 0.35, end : 0.44}],
                sec0_messageB_translate1 : [0, -30, {start : 0.25, end : 0.34}],
                sec0_messageB_translate2 : [-30, -60, {start : 0.35, end : 0.44}],

                sec0_messageC_opacity_in : [0, 1, {start : 0.45, end : 0.54}],
                sec0_messageC_opacity_out : [1, 0, {start : 0.55, end : 0.64}],
                sec0_messageC_translate1 : [0, -30, {start : 0.45, end : 0.54}],
                sec0_messageC_translate2 : [-30, -60, {start : 0.55, end : 0.64}],

                
                sec0_messageD_opacity_in : [0, 1, {start : 0.65, end : 0.74}],
                sec0_messageD_opacity_out : [1, 0, {start : 0.75, end : 0.84}],
                sec0_messageD_translate1 : [0, -30, {start : 0.65, end : 0.74}],
                sec0_messageD_translate2 : [-30, -60, {start : 0.75, end : 0.84}],

                sec0_messageE_opacity_in : [0, 1, {start : 0.85, end : 0.95}],
                sec0_messageE_opacity_out : [0, 0, {start : 0.96, end : 0.99}],
                sec0_messageE_translate1 : [0, -30, {start : 0.85, end : 0.90}],
                sec0_messageE_translate2 : [-30, -60, {start : 0.91, end : 0.98}],
            }
        },

        {
            height : 0,
            multiple : 4,

            objs : {
                container : document.querySelector('#section1-script'),
                canvas : document.querySelector('#main-canvas'),
                context : document.querySelector('#main-canvas').getContext('2d'),
                images : [],
            },

            vals : {
                imageCount : 865,
                canvas_image_seq : [0, 864, {start : 0.1, end : 0.4}],
                // canvas_opacity_out : [1, 0, {start : 0.3, end : 0.4}],

            }
        },

        {
            height : 0,
            multiple : 2,

            objs : {
                container : document.querySelector('#section2-script'),
            },

            vals : {

            }
        },
    ]
    
    const getCurrentSection = function() {
        let curSection = 0;
        let scrollPos = yOffset;
    
        for (let i = 0; i < sectionSet.length; i++) {
            if (scrollPos >= sectionSet[i].height) {
                scrollPos -= sectionSet[i].height;
            } else {
                curSection = i;
                break;
            }
        }
    
        return curSection;
    }

    const getPrevSectionHeight = function() 
    {
        let prevHeight = 0;

        for(let i = 0; i < curSection; i++)
        {
            prevHeight = prevHeight + sectionSet[i].height;
        }

        return prevHeight;
    }

    const setLayout = function() {

        if(window.innerHeight < 500)
        {
            sectionSet[0].height = 1000;
            sectionSet[1].height = 1000;
            sectionSet[2].height = 1000;

            sectionSet[0].objs.container.style.height = `${sectionSet[0].height}px`
            sectionSet[1].objs.container.style.height = `${sectionSet[1].height}px`
            sectionSet[2].objs.container.style.height = `${sectionSet[2].height}px`
            
        }

        else
        {
            for(let i = 0; i < sectionSet.length; i++)
            {
                sectionSet[i].height = window.innerHeight * sectionSet[i].multiple;
                sectionSet[i].objs.container.style.height = `${sectionSet[i].height}px`
            }
        }
        
    }

    const section0_sticky = function() {

        if((yOffset >= 599) && (yOffset <= sectionSet[0].height))
        {
            sectionSet[0].objs.sec0_message.style.position = `fixed`;
        }

        else
        {
            sectionSet[0].objs.sec0_message.style.position = `absolute`;
        }

    }

    const setBodyID = function(section) {
        document.body.setAttribute('id', `show-section${section}`);
    }

    // const setCanvas = function() {

    //     const imgCount = sectionSet[1].vals.imageCount;
    //     const canvasImages = sectionSet[1].objs.images;
    //     let imageElement;

    //     for(let i = 0; i < imgCount; i++)
    //     {
    //         imageElement = new Image();

    //         imageElement.src = `./image/effect/transition${i}.jpg`;
    //         canvasImages.push(imageElement);
    //     }

    //         imageElement.addEventListener('load', ()=>{
    //         sectionSet[1].objs.context.drawImage(canvasImages[0], 0, 0);
    //     });
    // }

    

    const getCssValue = function(values) {
       
        let start = values[2].start;
        let end = values[2].end;
        let values_start = values[0];
        let values_end = values[1];

        let totalHeight = sectionSet[curSection].height;
        let startScroll = start * totalHeight;
        let endScroll = end * totalHeight;
        let scrollLength = endScroll - startScroll;

        let retValue = 0;
        let rate = 0

        if(sectionYOffset < startScroll)
        {
            retValue = values_start;
        }
        
        else if(sectionYOffset > endScroll)
        {
            retValue = values_end;
        }

        else
        {
            rate = (sectionYOffset - startScroll) / scrollLength;
            retValue = values_start + ((values_end - values_start) * rate);
        }

        return retValue;
    }

    const playAnimation = function() {

        let transValue = 0;
        let opacityValue = 0;
        let scrollRate = sectionYOffset / sectionSet[curSection].height
        let imageSeq = 0;

        switch(curSection)
        {
            case 0 :

                sectionSet[0].objs.sec0_messageA.style.opacity = 0;
                sectionSet[0].objs.sec0_messageB.style.opacity = 0;
                sectionSet[0].objs.sec0_messageC.style.opacity = 0;
                sectionSet[0].objs.sec0_messageD.style.opacity = 0;
                sectionSet[0].objs.sec0_messageE.style.opacity = 0;

                

                if(scrollRate < 0.145)
                {   
                    opacityValue = getCssValue(sectionSet[0].vals.sec0_messageA_opacity_in);
                    sectionSet[0].objs.sec0_messageA.style.opacity = opacityValue;

                    transValue = getCssValue(sectionSet[0].vals.sec0_messageA_translate1);
                    sectionSet[0].objs.sec0_messageA.style.transform = `translateY(${transValue}px)`
                }
                
                else if((scrollRate >= 0.145) && (scrollRate < 0.245))
                {
                    opacityValue = getCssValue(sectionSet[0].vals.sec0_messageA_opacity_out);
                    sectionSet[0].objs.sec0_messageA.style.opacity = opacityValue;

                    transValue = getCssValue(sectionSet[0].vals.sec0_messageA_translate2)
                    sectionSet[0].objs.sec0_messageA.style.transform = `translateY(${transValue}px)`
                }

                else if((scrollRate >= 0.245) && (scrollRate < 0.345))
                {
                    opacityValue = getCssValue(sectionSet[0].vals.sec0_messageB_opacity_in);
                    sectionSet[0].objs.sec0_messageB.style.opacity = opacityValue;

                    transValue = getCssValue(sectionSet[0].vals.sec0_messageB_translate1)
                    sectionSet[0].objs.sec0_messageB.style.transform = `translateY(${transValue}px)`
                }

                else if((scrollRate >= 0.345) && (scrollRate < 0.445))
                {
                    opacityValue = getCssValue(sectionSet[0].vals.sec0_messageB_opacity_out);
                    sectionSet[0].objs.sec0_messageB.style.opacity = opacityValue;

                    transValue = getCssValue(sectionSet[0].vals.sec0_messageB_translate2)
                    sectionSet[0].objs.sec0_messageB.style.transform = `translateY(${transValue}px)`
                }

                else if((scrollRate >= 0.445) && (scrollRate < 0.545))
                {
                    opacityValue = getCssValue(sectionSet[0].vals.sec0_messageC_opacity_in);
                    sectionSet[0].objs.sec0_messageC.style.opacity = opacityValue;

                    transValue = getCssValue(sectionSet[0].vals.sec0_messageC_translate1)
                    sectionSet[0].objs.sec0_messageC.style.transform = `translateY(${transValue}px)`
                }

                else if((scrollRate >= 0.545) && (scrollRate < 0.645))
                {
                    opacityValue = getCssValue(sectionSet[0].vals.sec0_messageC_opacity_out);
                    sectionSet[0].objs.sec0_messageC.style.opacity = opacityValue;

                    transValue = getCssValue(sectionSet[0].vals.sec0_messageC_translate2)
                    sectionSet[0].objs.sec0_messageC.style.transform = `translateY(${transValue}px)`
                }

                else if((scrollRate >= 0.645) && (scrollRate < 0.745))
                {
                    opacityValue = getCssValue(sectionSet[0].vals.sec0_messageD_opacity_in);
                    sectionSet[0].objs.sec0_messageD.style.opacity = opacityValue;

                    transValue = getCssValue(sectionSet[0].vals.sec0_messageD_translate1)
                    sectionSet[0].objs.sec0_messageD.style.transform = `translateY(${transValue}px)`
                }

                else if((scrollRate >= 0.745) && (scrollRate < 0.845))
                {
                    opacityValue = getCssValue(sectionSet[0].vals.sec0_messageD_opacity_out);
                    sectionSet[0].objs.sec0_messageD.style.opacity = opacityValue;

                    transValue = getCssValue(sectionSet[0].vals.sec0_messageD_translate2)
                    sectionSet[0].objs.sec0_messageD.style.transform = `translateY(${transValue}px)`
                }

                else if((scrollRate >= 0.845) && (scrollRate < 0.945))
                {
                    opacityValue = getCssValue(sectionSet[0].vals.sec0_messageE_opacity_in);
                    sectionSet[0].objs.sec0_messageE.style.opacity = opacityValue;

                    transValue = getCssValue(sectionSet[0].vals.sec0_messageE_translate1)
                    sectionSet[0].objs.sec0_messageE.style.transform = `translateY(${transValue}px)`
                }

                else if((scrollRate >= 0.945) && (scrollRate < 0.99))
                {
                    opacityValue = getCssValue(sectionSet[0].vals.sec0_messageE_opacity_in);
                    sectionSet[0].objs.sec0_messageE.style.opacity = 0;

                    transValue = getCssValue(sectionSet[0].vals.sec0_messageE_translate1)
                    sectionSet[0].objs.sec0_messageE.style.transform = `translateY(${transValue}px)`
                }

                else if (scrollRate >= 0.99) {
                    objs.sec0_messageA.style.opacity = 0;
                    objs.sec0_messageB.style.opacity = 0;
                    objs.sec0_messageC.style.opacity = 0;
                    objs.sec0_messageD.style.opacity = 0;
                    objs.sec0_messageE.style.opacity = 0;
                }

                else if (curSection > 2) {
                    // 섹션 이후에는 메시지 요소들을 숨깁니다.
                    sectionSet[0].objs.sec0_messageA.style.opacity = 0;
                    sectionSet[0].objs.sec0_messageB.style.opacity = 0;
                    sectionSet[0].objs.sec0_messageC.style.opacity = 0;
                    sectionSet[0].objs.sec0_messageD.style.opacity = 0;
                    sectionSet[0].objs.sec0_messageE.style.opacity = 0;
                }

                if (scrollRate >= 0.99) {
                    sectionSet[0].objs.sec0_messageE.style.opacity = 0;
                }
                break;
                
            
            case 1 :

                

                

                
                break;

            default :

                for (let i = 0; i < sectionSet[curSection].objs.length; i++) {
                    const messageElement = sectionSet[curSection].objs[i];
                    if (messageElement) {
                        messageElement.style.opacity = 0;
                    }
                }
                break;
        }
    }

    // 초기 핫 키워드 배열
    let hotKeywords = [
        "버튜버",
        "댄스",
        "리그오브레전드",
        "오버워치",
        "배틀그라운드",
        "안병준",
        "버츄얼 규제",
        "주식",
        "먹방",
        "제1회 웨이버 노래자랑"
    ];

    // 핫 키워드를 표시할 HTML 요소
    const hotKeywordsContainer = document.getElementById("hot-keywords");

    // 핫 키워드를 표시하는 함수
    function displayHotKeywords() {
        // 기존의 핫 키워드를 모두 지웁니다.
        hotKeywordsContainer.innerHTML = "";

        // 핫 키워드를 반복하여 표시합니다.
        hotKeywords.forEach((keyword, index) => {
            const keywordElement = document.createElement("div");
            keywordElement.textContent = `${index + 1}위: ${keyword}`;
            hotKeywordsContainer.appendChild(keywordElement);
        });
    }

    // 핫 키워드를 무작위로 섞는 함수
    function shuffleKeywords() {
        hotKeywords.sort(() => Math.random() - 0.5);
    }

    // 핫 키워드 업데이트 함수
    function updateHotKeywords() {
        // 핫 키워드를 섞습니다.
        shuffleKeywords();
        // 핫 키워드를 다시 표시합니다.
        displayHotKeywords();
    }

    // 초기에 핫 키워드를 표시합니다.
    displayHotKeywords();

    // 3초마다 핫 키워드를 업데이트합니다.
    setInterval(updateHotKeywords, 3000);


    let HotWaversContainer = [
        "안병준",
        "구리구리",
        "짱구",
        "철수엄마",
        "스타벅스",
        "kIN",
        "Obama",
        "NaDa",
        "Faker",
        "손흥민"
    ];

    // 핫 키워드를 표시할 HTML 요소
    const HotWaversContainerContainer = document.getElementById("hot-wavers");

    // 핫 키워드를 표시하는 함수
    function displayHotWaversContainer() {
        // 기존의 핫 키워드를 모두 지웁니다.
        HotWaversContainerContainer.innerHTML = "";

        // 핫 키워드를 반복하여 표시합니다.
        HotWaversContainer.forEach((wavers, index) => {
            const waversElement = document.createElement("div");
            waversElement.textContent = `${index + 1}위: ${wavers}`;
            HotWaversContainerContainer.appendChild(waversElement);
        });
    }

    // 핫 키워드를 무작위로 섞는 함수
    function shuffleWavers() {
        HotWaversContainer.sort(() => Math.random() - 0.5);
    }

    // 핫 키워드 업데이트 함수
    function updateHotWaversContainer() {
        // 핫 키워드를 섞습니다.
        shuffleWavers();
        // 핫 키워드를 다시 표시합니다.
        displayHotWaversContainer();
    }

    // 초기에 핫 키워드를 표시합니다.
    displayHotWaversContainer();

    // 3초마다 핫 키워드를 업데이트합니다.
    setInterval(updateHotWaversContainer, 3000);
    
    

    setInterval(function() {
        document.querySelector('.section0-background-font.a').textContent = sectionSet[0].vals.texts[index];
        index = (index + 1) % sectionSet[0].vals.texts.length; 
    }, 2000); 

    document.addEventListener('DOMContentLoaded', function() {
        const selectedSection = document.querySelector('.section2-area2');
    
        function fadeOutSelectedSection() {
            selectedSection.classList.add('fade-out');
            selectedSection.style.zIndex = 1;
        }
    
        window.addEventListener('scroll', function() {
            // 현재 스크롤 위치를 확인하여 선택한 섹션이 화면에 보이면 페이드아웃을 설정합니다.
            if (window.scrollY >= 6000) {
                setTimeout(fadeOutSelectedSection, 5000); // 5000 밀리초(3초) 후에 사라지도록 설정
            }
        });
    });


    window.addEventListener('scroll', ()=>{
        
        yOffset = window.scrollY;
        sectionYOffset = yOffset - getPrevSectionHeight();

        console.log(yOffset);

        curSection = getCurrentSection();
        setBodyID(curSection);

        section0_sticky();

        playAnimation();

    })

    window.addEventListener('load', ()=>{
        
        setLayout();

        curSection = getCurrentSection();
        setBodyID(curSection);

        section0_sticky();

        playAnimation();
    })



})()