const CURRICULUM = {
  입문: {
    title: '입문',
    desc: '한글 자모를 배워요',
    days: 7,
    units: [
      {
        day: 1, title: '모음 1', type: 'consonant',
        items: [
          { kr: 'ㅏ', sound: 'a', example: '아이', meaning: '아이 (child)' },
          { kr: 'ㅑ', sound: 'ya', example: '야구', meaning: '야구 (baseball)' },
          { kr: 'ㅓ', sound: 'eo', example: '어머니', meaning: '어머니 (mother)' },
          { kr: 'ㅕ', sound: 'yeo', example: '여자', meaning: '여자 (woman)' },
          { kr: 'ㅗ', sound: 'o', example: '오빠', meaning: '오빠 (older brother)' },
        ]
      },
      {
        day: 2, title: '모음 2', type: 'consonant',
        items: [
          { kr: 'ㅛ', sound: 'yo', example: '요리', meaning: '요리 (cooking)' },
          { kr: 'ㅜ', sound: 'u', example: '우유', meaning: '우유 (milk)' },
          { kr: 'ㅠ', sound: 'yu', example: '유리', meaning: '유리 (glass)' },
          { kr: 'ㅡ', sound: 'eu', example: '으', meaning: '으 (hmm)' },
          { kr: 'ㅣ', sound: 'i', example: '이름', meaning: '이름 (name)' },
        ]
      },
      {
        day: 3, title: '자음 1', type: 'consonant',
        items: [
          { kr: 'ㄱ', sound: 'g/k', example: '가방', meaning: '가방 (bag)' },
          { kr: 'ㄴ', sound: 'n', example: '나무', meaning: '나무 (tree)' },
          { kr: 'ㄷ', sound: 'd/t', example: '다리', meaning: '다리 (bridge/leg)' },
          { kr: 'ㄹ', sound: 'r/l', example: '라면', meaning: '라면 (ramen)' },
          { kr: 'ㅁ', sound: 'm', example: '마음', meaning: '마음 (heart/mind)' },
        ]
      },
      {
        day: 4, title: '자음 2', type: 'consonant',
        items: [
          { kr: 'ㅂ', sound: 'b/p', example: '바나나', meaning: '바나나 (banana)' },
          { kr: 'ㅅ', sound: 's', example: '사과', meaning: '사과 (apple)' },
          { kr: 'ㅇ', sound: 'ng/silent', example: '아이', meaning: '아이 (child)' },
          { kr: 'ㅈ', sound: 'j', example: '자동차', meaning: '자동차 (car)' },
          { kr: 'ㅊ', sound: 'ch', example: '치마', meaning: '치마 (skirt)' },
        ]
      },
      {
        day: 5, title: '자음 3', type: 'consonant',
        items: [
          { kr: 'ㅋ', sound: 'k', example: '코끼리', meaning: '코끼리 (elephant)' },
          { kr: 'ㅌ', sound: 't', example: '토마토', meaning: '토마토 (tomato)' },
          { kr: 'ㅍ', sound: 'p', example: '피자', meaning: '피자 (pizza)' },
          { kr: 'ㅎ', sound: 'h', example: '하늘', meaning: '하늘 (sky)' },
          { kr: 'ㄲ', sound: 'kk', example: '꽃', meaning: '꽃 (flower)' },
        ]
      },
      {
        day: 6, title: '받침 기초', type: 'consonant',
        items: [
          { kr: '학', sound: 'hak', example: '학교', meaning: '학교 (school)' },
          { kr: '선', sound: 'seon', example: '선생님', meaning: '선생님 (teacher)' },
          { kr: '책', sound: 'chaek', example: '책', meaning: '책 (book)' },
          { kr: '밥', sound: 'bap', example: '밥', meaning: '밥 (rice/meal)' },
          { kr: '물', sound: 'mul', example: '물', meaning: '물 (water)' },
        ]
      },
      {
        day: 7, title: '복습 & 테스트', type: 'review', items: []
      }
    ]
  },

  기초: {
    title: '기초',
    desc: '기본 인사와 자기소개를 배워요',
    days: 7,
    units: [
      {
        day: 1, title: '인사', type: 'word',
        items: [
          { kr: '안녕하세요', sound: 'annyeonghaseyo', meaning: 'Hello', example: '안녕하세요! 저는 윤빈이예요.' },
          { kr: '감사합니다', sound: 'gamsahamnida', meaning: 'Thank you', example: '도와줘서 감사합니다.' },
          { kr: '죄송합니다', sound: 'joesonghamnida', meaning: 'I\'m sorry', example: '늦어서 죄송합니다.' },
          { kr: '괜찮아요', sound: 'gwaenchanayo', meaning: 'It\'s okay', example: '괜찮아요, 걱정하지 마세요.' },
          { kr: '안녕히 가세요', sound: 'annyeonghi gaseyo', meaning: 'Goodbye', example: '선생님, 안녕히 가세요!' },
        ]
      },
      {
        day: 2, title: '자기소개', type: 'word',
        items: [
          { kr: '저는 ~이에요', sound: 'jeoneun ~ieyo', meaning: 'I am ~', example: '저는 서현이예요' },
          { kr: '이름이 뭐예요?', sound: 'ireum-i mwoyeyo', meaning: 'What is your name?', example: '이름이 뭐예요? 저는 지연이예요.' },
          { kr: '몇 살이에요?', sound: 'myeot sal-ieyo', meaning: 'How old are you?', example: '몇 살이에요? 저는 열세 살이에요.' },
          { kr: '어디서 왔어요?', sound: 'eodiseo wasseoyo', meaning: 'Where are you from?', example: '어디서 왔어요? 베트남에서 왔어요.' },
          { kr: '반가워요', sound: 'bangawoyo', meaning: 'Nice to meet you', example: '만나서 반가워요!' },
        ]
      },
      {
        day: 3, title: '숫자', type: 'word',
        items: [
          { kr: '일, 이, 삼', sound: 'il, i, sam', meaning: '1, 2, 3', example: '일 더하기 이는 삼이에요.' },
          { kr: '사, 오, 육', sound: 'sa, o, yuk', meaning: '4, 5, 6', example: '사과가 오 개 있어요.' },
          { kr: '칠, 팔, 구', sound: 'chil, pal, gu', meaning: '7, 8, 9', example: '칠월 팔일이에요.' },
          { kr: '십, 백, 천', sound: 'sip, baek, cheon', meaning: '10, 100, 1000', example: '십 원, 백 원, 천 원.' },
          { kr: '하나, 둘, 셋', sound: 'hana, dul, set', meaning: 'one, two, three (native)', example: '사과 하나 주세요.' },
        ]
      },
      {
        day: 4, title: '요일', type: 'word',
        items: [
          { kr: '월요일', sound: 'woryoil', meaning: 'Monday', example: '월요일에 학교 가요.' },
          { kr: '화요일', sound: 'hwayoil', meaning: 'Tuesday', example: '화요일에 체육 수업이 있어요.' },
          { kr: '수요일', sound: 'suyoil', meaning: 'Wednesday', example: '수요일은 급식이 맛있어요.' },
          { kr: '목요일', sound: 'mogyoil', meaning: 'Thursday', example: '목요일에 시험이 있어요.' },
          { kr: '금요일', sound: 'geumyoil', meaning: 'Friday', example: '금요일은 즐거워요!' },
        ]
      },
      {
        day: 5, title: '가족', type: 'word',
        items: [
          { kr: '아버지', sound: 'abeoji', meaning: 'Father', example: '아버지가 요리를 해요.' },
          { kr: '어머니', sound: 'eomeoni', meaning: 'Mother', example: '어머니가 학교에 오셨어요.' },
          { kr: '형/오빠', sound: 'hyeong/oppa', meaning: 'Older brother', example: '오빠가 숙제를 도와줘요.' },
          { kr: '언니/누나', sound: 'eonni/nuna', meaning: 'Older sister', example: '언니가 책을 읽어요.' },
          { kr: '동생', sound: 'dongsaeng', meaning: 'Younger sibling', example: '동생이 귀여워요.' },
        ]
      },
      {
        day: 6, title: '음식', type: 'word',
        items: [
          { kr: '밥', sound: 'bap', meaning: 'Rice/Meal', example: '밥 먹었어요?' },
          { kr: '물', sound: 'mul', meaning: 'Water', example: '물 좀 주세요.' },
          { kr: '빵', sound: 'ppang', meaning: 'Bread', example: '아침에 빵을 먹어요.' },
          { kr: '맛있어요', sound: 'massisseoyo', meaning: 'Delicious', example: '급식이 맛있어요!' },
          { kr: '배고파요', sound: 'baegopayo', meaning: 'I\'m hungry', example: '배고파요, 밥 먹고 싶어요.' },
        ]
      },
      {
        day: 7, title: '복습 & 테스트', type: 'review', items: []
      }
    ]
  },

  초급: {
    title: '초급',
    desc: '학교생활 표현을 배워요',
    days: 7,
    units: [
      {
        day: 1, title: '교실 단어', type: 'word',
        items: [
          { kr: '교실', sound: 'gyosil', meaning: 'Classroom', example: '교실이 깨끗해요.' },
          { kr: '칠판', sound: 'chilpan', meaning: 'Blackboard', example: '선생님이 칠판에 써요.' },
          { kr: '책상', sound: 'chaeksang', meaning: 'Desk', example: '책상 위에 책이 있어요.' },
          { kr: '의자', sound: 'uija', meaning: 'Chair', example: '의자에 앉아요.' },
          { kr: '가방', sound: 'gabang', meaning: 'Bag', example: '가방에 교과서를 넣어요.' },
        ]
      },
      {
        day: 2, title: '수업 표현', type: 'sentence',
        items: [
          { kr: '모르겠어요', sound: 'moreugeseoyo', meaning: 'I don\'t understand', example: '선생님, 모르겠어요.' },
          { kr: '다시 말해 주세요', sound: 'dasi malhae juseyo', meaning: 'Please say it again', example: '죄송한데 다시 말해 주세요.' },
          { kr: '화장실에 가도 돼요?', sound: 'hwajangsil-e gado dwaeyo', meaning: 'May I go to the restroom?', example: '선생님, 화장실에 가도 돼요?' },
          { kr: '숙제 있어요?', sound: 'sukje isseoyo', meaning: 'Is there homework?', example: '오늘 숙제 있어요?' },
          { kr: '몇 페이지예요?', sound: 'myeot peijiyeyo', meaning: 'What page is it?', example: '몇 페이지예요? 47페이지예요.' },
        ]
      },
      {
        day: 3, title: '교과목', type: 'word',
        items: [
          { kr: '국어', sound: 'gugeo', meaning: 'Korean language', example: '국어 시간에 책을 읽어요.' },
          { kr: '수학', sound: 'suhak', meaning: 'Math', example: '수학이 어려워요.' },
          { kr: '영어', sound: 'yeongeo', meaning: 'English', example: '영어 수업이 재미있어요.' },
          { kr: '과학', sound: 'gwahak', meaning: 'Science', example: '과학 실험이 신기해요.' },
          { kr: '체육', sound: 'cheyuk', meaning: 'Physical education', example: '체육 시간에 축구를 해요.' },
        ]
      },
      {
        day: 4, title: '친구 사귀기', type: 'sentence',
        items: [
          { kr: '같이 놀자', sound: 'gachi nolja', meaning: 'Let\'s play together', example: '쉬는 시간에 같이 놀자.' },
          { kr: '친구 할래?', sound: 'chingu hallae', meaning: 'Do you want to be friends?', example: '우리 친구 할래?' },
          { kr: '좋아해요', sound: 'joahaeyo', meaning: 'I like it', example: '이 게임 좋아해요?' },
          { kr: '도와줄게요', sound: 'dowajulgeyo', meaning: 'I\'ll help you', example: '내가 도와줄게요.' },
          { kr: '고마워요', sound: 'gomawoyo', meaning: 'Thank you (casual)', example: '도와줘서 고마워요.' },
        ]
      },
      {
        day: 5, title: '급식', type: 'sentence',
        items: [
          { kr: '급식 메뉴가 뭐예요?', sound: 'geupsik menyu-ga mwoyeyo', meaning: 'What\'s on the school menu?', example: '오늘 급식 메뉴가 뭐예요?' },
          { kr: '더 주세요', sound: 'deo juseyo', meaning: 'Please give me more', example: '밥 더 주세요.' },
          { kr: '됐어요', sound: 'dwaesseoyo', meaning: 'That\'s enough / It\'s done', example: '됐어요, 감사합니다.' },
          { kr: '맛없어요', sound: 'mat-eopseoyo', meaning: 'It doesn\'t taste good', example: '오늘 급식 맛없어요.' },
          { kr: '알레르기 있어요', sound: 'allereugi isseoyo', meaning: 'I have an allergy', example: '저 땅콩 알레르기 있어요.' },
        ]
      },
      {
        day: 6, title: '학교 안내', type: 'sentence',
        items: [
          { kr: '어디에 있어요?', sound: 'eodie isseoyo', meaning: 'Where is it?', example: '도서관이 어디에 있어요?' },
          { kr: '몇 층이에요?', sound: 'myeot cheungieyo', meaning: 'What floor is it?', example: '보건실이 몇 층이에요?' },
          { kr: '알림장 써요', sound: 'allimjang sseoyo', meaning: 'Write in the notification book', example: '숙제를 알림장에 써요.' },
          { kr: '준비물 가져와요', sound: 'junbimul gajeowoyo', meaning: 'Bring your supplies', example: '내일 색연필 준비물 가져와요.' },
          { kr: '부모님께 보여주세요', sound: 'bumonim-kke boyeojuseyo', meaning: 'Show it to your parents', example: '가정통신문 부모님께 보여주세요.' },
        ]
      },
      {
        day: 7, title: '복습 & 테스트', type: 'review', items: []
      }
    ]
  },

  중급: {
    title: '중급',
    desc: '일상회화와 학교 표현을 배워요',
    days: 7,
    units: [
      {
        day: 1, title: '감정 표현', type: 'sentence',
        items: [
          { kr: '기분이 좋아요', sound: 'gibun-i joayo', meaning: 'I feel good', example: '오늘 기분이 좋아요!' },
          { kr: '슬퍼요', sound: 'seulpeoyo', meaning: 'I\'m sad', example: '친구가 없어서 슬퍼요.' },
          { kr: '화가 났어요', sound: 'hwaga nasseoyo', meaning: 'I\'m angry', example: '왜 화가 났어요?' },
          { kr: '무서워요', sound: 'museowoyo', meaning: 'I\'m scared', example: '발표가 무서워요.' },
          { kr: '외로워요', sound: 'oelowoyo', meaning: 'I\'m lonely', example: '한국에서 외로워요.' },
        ]
      },
      {
        day: 2, title: '학업 표현', type: 'sentence',
        items: [
          { kr: '이 문제 어떻게 풀어요?', sound: 'i munje eotteoke pureoyo', meaning: 'How do I solve this problem?', example: '이 수학 문제 어떻게 풀어요?' },
          { kr: '발표해도 돼요?', sound: 'balpyohaeyo doeyo', meaning: 'May I present?', example: '선생님, 제가 발표해도 돼요?' },
          { kr: '성적이 걱정돼요', sound: 'seongjeoigi geokjeongdwaeyo', meaning: 'I\'m worried about my grades', example: '시험 성적이 걱정돼요.' },
          { kr: '보충수업이 있어요?', sound: 'bochung-sueob-i isseoyo', meaning: 'Is there extra class?', example: '방과 후 보충수업이 있어요?' },
          { kr: '칭찬 받았어요', sound: 'chingchan badasseoyo', meaning: 'I got praised', example: '선생님께 칭찬 받았어요.' },
        ]
      },
      {
        day: 3, title: '교과 어휘 — 수학', type: 'word',
        items: [
          { kr: '더하기', sound: 'deohagi', meaning: 'Addition (+)', example: '삼 더하기 사는 칠이에요.' },
          { kr: '빼기', sound: 'ppaegi', meaning: 'Subtraction (-)', example: '십 빼기 삼은 칠이에요.' },
          { kr: '곱하기', sound: 'gopagi', meaning: 'Multiplication (×)', example: '이 곱하기 오는 십이에요.' },
          { kr: '나누기', sound: 'nanugi', meaning: 'Division (÷)', example: '십 나누기 이는 오예요.' },
          { kr: '넓이', sound: 'neolbi', meaning: 'Area', example: '직사각형의 넓이를 구해요.' },
        ]
      },
      {
        day: 4, title: '교과 어휘 — 국어', type: 'word',
        items: [
          { kr: '주인공', sound: 'juingong', meaning: 'Main character', example: '이 이야기의 주인공은 누구예요?' },
          { kr: '줄거리', sound: 'julgeori', meaning: 'Summary/Plot', example: '책의 줄거리를 말해 보세요.' },
          { kr: '문단', sound: 'mundan', meaning: 'Paragraph', example: '첫 번째 문단을 읽어요.' },
          { kr: '띄어쓰기', sound: 'ttieosseugi', meaning: 'Word spacing', example: '띄어쓰기를 잘 해야 해요.' },
          { kr: '받아쓰기', sound: 'badaseugi', meaning: 'Dictation', example: '받아쓰기 시험이 있어요.' },
        ]
      },
      {
        day: 5, title: '전화·문자', type: 'sentence',
        items: [
          { kr: '여보세요', sound: 'yeoboseyo', meaning: 'Hello (on phone)', example: '여보세요, 수인이 있어요?' },
          { kr: '잠깐만요', sound: 'jamkkanmanyo', meaning: 'Just a moment', example: '잠깐만요, 지금 바빠요.' },
          { kr: '나중에 전화할게요', sound: 'najunge jeonhwahalgeyo', meaning: 'I\'ll call back later', example: '나중에 전화할게요.' },
          { kr: '문자 보냈어요', sound: 'munja bonaesseoyo', meaning: 'I sent a text', example: '방금 문자 보냈어요.' },
          { kr: '확인했어요', sound: 'hwagin-haesseoyo', meaning: 'I checked it', example: '카카오톡 확인했어요.' },
        ]
      },
      {
        day: 6, title: '부탁·거절', type: 'sentence',
        items: [
          { kr: '~해 줄 수 있어요?', sound: '~hae jul su isseoyo', meaning: 'Can you ~ for me?', example: '이거 도와줄 수 있어요?' },
          { kr: '그렇게 할게요', sound: 'geureoke halgeyo', meaning: 'I\'ll do that', example: '네, 그렇게 할게요.' },
          { kr: '죄송한데 어려워요', sound: 'joesonghande eoryeowoyo', meaning: 'Sorry, it\'s difficult', example: '죄송한데 지금은 어려워요.' },
          { kr: '다음에 해도 돼요?', sound: 'daeum-e haedo dwaeyo', meaning: 'Can I do it next time?', example: '오늘 말고 다음에 해도 돼요?' },
          { kr: '제가 해볼게요', sound: 'jega haebolgeyo', meaning: 'I\'ll try it', example: '제가 한번 해볼게요.' },
        ]
      },
      {
        day: 7, title: '복습 & 테스트', type: 'review', items: []
      }
    ]
  },

  고급: {
    title: '고급',
    desc: '학술 표현과 글쓰기를 배워요',
    days: 7,
    units: [
      {
        day: 1, title: '발표 표현', type: 'sentence',
        items: [
          { kr: '제 발표를 시작하겠습니다', sound: 'je balpyoreul sijakhagetseumnida', meaning: 'I will begin my presentation', example: '안녕하세요, 제 발표를 시작하겠습니다.' },
          { kr: '~에 대해 발표하겠습니다', sound: '~e daehae balpyohagetseumnida', meaning: 'I will present about ~', example: '환경오염에 대해 발표하겠습니다.' },
          { kr: '정리하자면', sound: 'jeongnihamyeon', meaning: 'To summarize', example: '정리하자면, 세 가지가 중요합니다.' },
          { kr: '질문 있으신가요?', sound: 'jilmun isseusingayo', meaning: 'Any questions?', example: '이상으로 마치겠습니다. 질문 있으신가요?' },
          { kr: '~라고 생각합니다', sound: '~rago saenggakhamnida', meaning: 'I think that ~', example: '환경 보호가 중요하다고 생각합니다.' },
        ]
      },
      {
        day: 2, title: '글쓰기 표현', type: 'sentence',
        items: [
          { kr: '따라서', sound: 'ttaraseo', meaning: 'Therefore', example: '따라서 우리는 노력해야 합니다.' },
          { kr: '그러므로', sound: 'geureomeoro', meaning: 'Therefore/Thus', example: '그러므로 이 방법이 최선입니다.' },
          { kr: '반면에', sound: 'banmyeon-e', meaning: 'On the other hand', example: '반면에 단점도 있습니다.' },
          { kr: '예를 들면', sound: 'yereul deulmyeon', meaning: 'For example', example: '예를 들면, 독서가 도움이 됩니다.' },
          { kr: '결론적으로', sound: 'gyeollonjeogeuro', meaning: 'In conclusion', example: '결론적으로 협력이 중요합니다.' },
        ]
      },
      {
        day: 3, title: '토론 표현', type: 'sentence',
        items: [
          { kr: '저는 ~에 찬성합니다', sound: 'jeoneun ~e chanseong-hamnida', meaning: 'I agree with ~', example: '저는 이 의견에 찬성합니다.' },
          { kr: '저는 ~에 반대합니다', sound: 'jeoneun ~e bandaehamnida', meaning: 'I disagree with ~', example: '저는 이 방법에 반대합니다.' },
          { kr: '근거가 뭔가요?', sound: 'geungeo-ga mwongayo', meaning: 'What is your evidence?', example: '그 주장의 근거가 뭔가요?' },
          { kr: '일리가 있어요', sound: 'illega isseoyo', meaning: 'That makes sense', example: '그 말도 일리가 있어요.' },
          { kr: '다른 관점에서 보면', sound: 'dareun gwanjeom-eseo bomyeon', meaning: 'From a different perspective', example: '다른 관점에서 보면 어떨까요?' },
        ]
      },
      {
        day: 4, title: '교과 어휘 — 사회', type: 'word',
        items: [
          { kr: '민주주의', sound: 'minjujuui', meaning: 'Democracy', example: '우리나라는 민주주의 국가예요.' },
          { kr: '경제', sound: 'gyeongje', meaning: 'Economy', example: '경제가 성장하고 있어요.' },
          { kr: '문화유산', sound: 'munhwayusan', meaning: 'Cultural heritage', example: '불국사는 문화유산이에요.' },
          { kr: '지형', sound: 'jihyeong', meaning: 'Topography', example: '한국의 지형을 배워요.' },
          { kr: '인구', sound: 'inku', meaning: 'Population', example: '서울의 인구가 많아요.' },
        ]
      },
      {
        day: 5, title: '교과 어휘 — 과학', type: 'word',
        items: [
          { kr: '광합성', sound: 'gwanghapsseong', meaning: 'Photosynthesis', example: '식물은 광합성을 해요.' },
          { kr: '중력', sound: 'jungnyeok', meaning: 'Gravity', example: '중력 때문에 물체가 떨어져요.' },
          { kr: '세포', sound: 'sepo', meaning: 'Cell', example: '우리 몸은 세포로 이루어져 있어요.' },
          { kr: '에너지', sound: 'eneoji', meaning: 'Energy', example: '태양에서 에너지를 얻어요.' },
          { kr: '변화', sound: 'byeonhwa', meaning: 'Change', example: '물질의 변화를 관찰해요.' },
        ]
      },
      {
        day: 6, title: '진로 표현', type: 'sentence',
        items: [
          { kr: '장래희망이 뭐예요?', sound: 'jangnae-huimang-i mwoyeyo', meaning: 'What is your dream job?', example: '장래희망이 뭐예요? 의사가 되고 싶어요.' },
          { kr: '~가 되고 싶어요', sound: '~ga doeogo sipeoyo', meaning: 'I want to become ~', example: '저는 선생님이 되고 싶어요.' },
          { kr: '꿈을 이루고 싶어요', sound: 'kkum-eul irugo sipeoyo', meaning: 'I want to achieve my dream', example: '열심히 공부해서 꿈을 이루고 싶어요.' },
          { kr: '진로를 고민 중이에요', sound: 'jillo-reul gomin jung-ieyo', meaning: 'I\'m thinking about my career path', example: '아직 진로를 고민 중이에요.' },
          { kr: '상담 받고 싶어요', sound: 'sangdam batgo sipeoyo', meaning: 'I want counseling', example: '진로 상담 받고 싶어요.' },
        ]
      },
      {
        day: 7, title: '복습 & 테스트', type: 'review', items: []
      }
    ]
  }
};

// 레벨 진단 문제
const DIAGNOSIS = [
  { q: '다음 중 "선생님"을 올바르게 읽은 것은?', options: ['선생님', '생선님', '선님생', '생님선'], answer: 0, level: '입문' },
  { q: '"안녕하세요"의 뜻은?', options: ['Thank you', 'Hello', 'Goodbye', 'Sorry'], answer: 1, level: '입문' },
  { q: '학교에서 밥 먹는 시간을 뭐라고 해요?', options: ['수업', '쉬는 시간', '급식', '조례'], answer: 2, level: '기초' },
  { q: '"모르겠어요"는 언제 써요?', options: ['배고플 때', '이해 못했을 때', '화날 때', '기쁠 때'], answer: 1, level: '기초' },
  { q: '수학에서 "더하기"는?', options: ['×', '÷', '+', '-'], answer: 2, level: '초급' },
  { q: '"발표해도 돼요?"의 의미는?', options: ['화장실 가도 되나요?', '발표해도 되나요?', '집에 가도 되나요?', '먹어도 되나요?'], answer: 1, level: '초급' },
  { q: '"따라서"와 비슷한 표현은?', options: ['반면에', '예를 들면', '그러므로', '하지만'], answer: 2, level: '중급' },
  { q: '토론에서 의견에 동의할 때 쓰는 표현은?', options: ['반대합니다', '찬성합니다', '모르겠어요', '됐어요'], answer: 1, level: '중급' },
  { q: '"광합성"이 일어나는 곳은?', options: ['동물', '식물', '돌', '물'], answer: 1, level: '고급' },
  { q: '"결론적으로"는 글의 어느 부분에 써요?', options: ['시작', '중간', '끝', '제목'], answer: 2, level: '고급' },
];