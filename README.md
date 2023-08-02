# Kiosk_Project

키오스크 주문 프로그램 제작하기

23.07.30 상품 관리 기능/관리자 기능 구현

ERD 설계

![image](https://github.com/lec2528/Kiosk_Project/assets/132907542/f9c8fe18-ed23-4e70-aabf-6d3b8efdd134)

기본 api
localhost:3000/api

상품관리 api  - defalt (localhost:3000/api/item)
전체 상품 조회 : router.get('/');
상품 타입별 조회 : router.get('/:type');
상품 생성 : router.post('/');
상품 수정 : router.put('/:itemId');
상품 삭제 : router.delete('/:itemId')

발주관리 api -defalt (localhost:3000/api/order)
발주 생성 : router.post('/:itemId')
발주 수정 : router.put('/:itemId/:orderItemId');


고객 주문 상태 관리 api - defalt (localhost:3000/api/ordercustomer)
주문 생성 : router.post('/');
주문 상태 수정 : router.put('/:itemId/:orderCustomerId');
주문 취소 : router.delete('/:itemId/:orderCustomerId');

고객 주문 관리 api defalt(localhost:3000/api/itemOrderCustomer)
주문 id 발급 : router.post('/:itemId/:orderCustomerId');

옵션 관리 api - defalt(localhost:3000/api/option)
옵션 생성 : router.post('/');


