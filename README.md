#### Chạy lệnh dưới để compile contact (nhớ config hardhat.config.js, tham khảo document hardhat), sau khi compile contract sẽ tự động tạo thư mục artifacts, cache chứa các abi code
    `npx hardhat compile`
#### Test xem các testcase đã pass chưa, lúc này sẽ dùng mạng test của hardhat để test (tạo một thư mục test và file TestToken.js rồi code test của contract trong đó, giống test unit, tham khảo thêm ở hardhat document)
    `npx hardhat test`
#### Chạy lệnh này để deploy thực(phải config deploy trong scripts/deploy.js và add thêm mạng bsctest vào hardhat.config.js), sau khi deploy sẽ trả về Token address để sử dụng nó cho lệnh tiếp theo
    `npx hardhat run scripts/deploy.js --network bsctest` 
#### Chạy lệnh dưới dể verify contract vừa deploy ở trên, nhớ config env bao gồm PRIV_KEY là khóa private của ví (metamask), API_KEY là api_key của tài khoản bscscan - phải đăng nhập vào bscscan để lấy apikey) đối với mạng đang  test là BNB testnet
#### Lệnh này chủ yếu để trên bscscan có thể đọc được code contract, nếu ko có vertify thì code bị mã hóa ko hiện ra được
    `npx hardhat verify --network bsctest 0x40b329248a0C7dA870afb05321f4541780F6E53b` //address này lấy từ lệnh trước đó trả về