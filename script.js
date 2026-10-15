

/* =====================================
   1. CHUẨN HÓA TÊN
   Cho phép nhập tên có dấu hoặc không dấu
===================================== */

function normalizeName(name) {
    return name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[đĐ]/g, "d")
        .toLowerCase()
        .replace(/\s+/g, "")
        .trim();
}


/* =====================================
   2. DANH SÁCH LỜI CHÚC
   Mỗi người có lời chúc và 2 ảnh riêng
===================================== */

const girls = {

    "huynhthibaoan": {
        name: "Huỳnh Thị Bảo An",
        message: `Bảo An ơi, chúc cậu có một ngày 20/10 thật vui vẻ và ngập tràn yêu thương! 🌷

Mong rằng cậu sẽ luôn giữ được nụ cười tươi tắn, sự tự tin và tinh thần lạc quan của mình. Chúc cậu trên con đường phía trước luôn gặp được những người chân thành, có đủ dũng khí để theo đuổi ước mơ và đủ kiên trì để biến những điều mình mong muốn thành hiện thực.

Hy vọng những năm tháng học trò của cậu sẽ luôn có thật nhiều kỷ niệm đẹp, những tiếng cười vô tư và những người bạn đáng quý. Chúc An luôn hạnh phúc và được yêu thương theo cách cậu xứng đáng nhé! 💗💐`,
        image1: "images/huynhthibaoan1.jpg",
        image2: "images/huynhthibaoan2.jpg"
    },

    "chauquynhanh": {
        name: "Châu Quỳnh Anh",
        message: `Quỳnh Anh à, nhân ngày 20/10, chúc cậu có một ngày thật đặc biệt, nhận được thật nhiều lời chúc dễ thương và những món quà đầy ý nghĩa! 🎀

Mong cậu luôn tin tưởng vào bản thân, không ngại thử sức với những điều mới mẻ và luôn tìm thấy niềm vui trong những việc mình làm. Chúc cậu học tập thật tốt, có thêm nhiều trải nghiệm đáng nhớ và luôn đủ mạnh mẽ để vượt qua những ngày chưa được như ý.

Hy vọng mỗi ngày đến trường đều mang đến cho cậu một điều vui nho nhỏ, để sau này khi nhớ lại, cậu sẽ mỉm cười vì đã có một tuổi học trò thật đẹp. Chúc cậu luôn rạng rỡ và hạnh phúc nha! 🌸`,
        image1: "images/chauquynhanh1.jpg",
        image2: "images/chauquynhanh2.jpg"
    },

    "luhadongdoanh": {
        name: "Lữ Hà Đông Doanh",
        message: `Đông Doanh ơi, chúc cậu một ngày Phụ nữ Việt Nam thật ấm áp và tràn đầy niềm vui! 🌷

Mong rằng cậu sẽ luôn giữ được những điều tốt đẹp trong trái tim mình, biết trân trọng bản thân và không bao giờ ngừng cố gắng vì những mục tiêu mà cậu yêu thích. Chúc cậu gặp nhiều may mắn trong học tập, luôn có bạn bè bên cạnh để cùng chia sẻ niềm vui và những lúc khó khăn.

Cuộc sống chắc chắn sẽ có những ngày không hoàn hảo, nhưng mong cậu vẫn luôn tìm được lý do để mỉm cười và tiếp tục bước về phía trước. Chúc Đông Doanh có thật nhiều hạnh phúc, bình an và những kỷ niệm thanh xuân đáng nhớ! 💐`,
        image1: "images/luhadongdoanh1.jpg",
        image2: "images/luhadongdoanh2.jpg"
    },

    "tranngocanhduong": {
        name: "Trần Ngọc Ánh Dương",
        message: `Ánh Dương ơi, nhân ngày 20/10, chúc cậu sẽ luôn mang trong mình nguồn năng lượng tích cực và lan tỏa niềm vui đến mọi người! ☀️

Mong cậu luôn có đủ tự tin để thể hiện bản thân, đủ can đảm để theo đuổi ước mơ và đủ bình yên để tận hưởng những điều giản dị quanh mình. Chúc cậu học tập thuận lợi, có nhiều cơ hội khám phá những khả năng của bản thân và luôn gặp được những người thật lòng quý mến cậu.

Mong rằng những ngày tháng học trò sẽ là khoảng thời gian thật đẹp, để mỗi khi nhớ lại, cậu đều mỉm cười vì đã có những người bạn đồng hành. 💛`,
        image1: "images/tranngocanhduong1.jpg",
        image2: "images/tranngocanhduong2.jpg"
    },

    "trinhnguyentrangkhanh": {
        name: "Trịnh Nguyễn Trang Khanh",
        message: `Trang Khanh thân mến, chúc cậu có một ngày 20/10 thật ngọt ngào, vui vẻ và nhận được thật nhiều yêu thương! 🎀

Mong cậu luôn biết rằng bản thân mình có những giá trị riêng đáng trân trọng, không cần phải trở thành bất kỳ ai khác để được công nhận. Chúc cậu luôn giữ được sự tự tin, có đủ kiên nhẫn để theo đuổi những điều mình yêu thích và luôn mạnh mẽ khi đứng trước thử thách.

Mong những dự định của cậu sẽ dần trở thành hiện thực, những cố gắng hôm nay sẽ mang đến kết quả xứng đáng trong tương lai. Chúc Khanh có một thanh xuân đầy ắp tiếng cười, tình bạn và những kỷ niệm khó quên! 🌷`,
        image1: "images/trinhnguyentrangkhanh1.jpg",
        image2: "images/trinhnguyentrangkhanh2.jpg"
    },

    "nguyenmaikhanh": {
        name: "Nguyễn Mai Khánh",
        message: `Mai Khánh ơi, chúc cậu một ngày 20/10 thật vui vẻ và đáng nhớ! 💐

Mong cậu sẽ luôn giữ được sự hồn nhiên của tuổi học trò, biết tận hưởng những niềm vui nhỏ bé và trân trọng những người đang ở bên cạnh mình. Chúc cậu học tập ngày càng tiến bộ, luôn tìm thấy động lực ngay cả khi gặp những bài học khó và không ngừng khám phá những điều mới mẻ.

Hy vọng cậu sẽ có thật nhiều dịp được cười thật thoải mái, được chia sẻ những câu chuyện của mình và nhận lại sự quan tâm chân thành từ mọi người. Chúc Khánh luôn bình an và hạnh phúc nhé! 💗`,
        image1: "images/nguyenmaikhanh1.jpg",
        image2: "images/nguyenmaikhanh2.jpg"
    },

    "laaikim": {
        name: "La Ái Kim",
        message: `Ái Kim ơi, nhân ngày 20/10, chúc cậu luôn vui vẻ, bình an và được bao quanh bởi thật nhiều tình yêu thương! 🌸

Mong cậu sẽ luôn giữ được sự chân thành của mình, biết yêu quý những điều mình đang có và không ngừng cố gắng để trở thành phiên bản mà bản thân mong muốn. Chúc cậu có những ngày đến lớp thật nhiều tiếng cười, những giờ học đạt kết quả tốt và những người bạn sẵn sàng cùng cậu chia sẻ mọi chuyện.

Nếu có lúc nào cảm thấy mệt mỏi, mong cậu nhớ rằng vẫn còn rất nhiều điều tốt đẹp đang chờ đón phía trước. Chúc Ái Kim luôn gặp may mắn và có một tuổi học trò thật đáng nhớ! 💐`,
        image1: "images/laaikim1.jpg",
        image2: "images/laaikim2.jpg"
    },

    "nguyenphamthuylam": {
        name: "Nguyễn Phạm Thùy Lâm",
        message: `Thùy Lâm à, chúc cậu có một ngày 20/10 thật ấm áp, nhận được nhiều lời chúc chân thành và luôn cảm thấy mình được yêu quý! 🌷

Mong cậu luôn kiên định với những mục tiêu đã chọn, không dễ dàng bỏ cuộc trước khó khăn và biết tự hào về những nỗ lực của chính mình. Chúc cậu học tập ngày càng tốt, khám phá thêm nhiều sở thích mới và có thật nhiều trải nghiệm khiến bản thân trưởng thành hơn từng ngày.

Mong rằng trên hành trình thực hiện ước mơ, cậu sẽ gặp được những người sẵn sàng động viên, giúp đỡ và cùng cậu tạo nên những kỷ niệm đẹp. Chúc Lâm luôn lạc quan và có một tương lai thật nhiều điều tốt đẹp! 💗`,
        image1: "images/nguyenphamthuylam1.jpg",
        image2: "images/nguyenphamthuylam2.jpg"
    },

    "huynhhoangkimngan": {
        name: "Huỳnh Hoàng Kim Ngân",
        message: `Kim Ngân ơi, chúc cậu một ngày Phụ nữ Việt Nam thật rực rỡ và tràn ngập những điều đáng yêu! 🌼

Mong cậu luôn có thật nhiều năng lượng để học tập, vui chơi và thực hiện những dự định của mình. Chúc cậu không chỉ đạt được những thành tích mà mình mong muốn mà còn luôn tìm thấy niềm vui trong hành trình cố gắng ấy.

Hy vọng cậu sẽ có thật nhiều người bạn tốt, những cuộc trò chuyện vui vẻ và những khoảnh khắc bình thường nhưng sau này nhớ lại vẫn thấy thật quý giá. Chúc Kim Ngân luôn hạnh phúc và gặp thật nhiều điều may mắn! 💐`,
        image1: "images/huynhhoangkimngan1.jpg",
        image2: "images/huynhhoangkimngan2.jpg"
    },

    "buichaubaongoc": {
        name: "Bùi Châu Bảo Ngọc",
        message: `Bảo Ngọc thân mến, chúc cậu có một ngày 20/10 thật nhiều niềm vui, tiếng cười và những điều bất ngờ dễ thương! 💎

Mong cậu luôn trân trọng những điểm đặc biệt của bản thân, tự tin với lựa chọn của mình và không ngừng học hỏi để tiến bộ hơn mỗi ngày. Chúc cậu có thật nhiều cảm hứng trong học tập, luôn tìm được cách vượt qua những khó khăn và nhận được sự đồng hành từ những người bạn chân thành.

Hy vọng thanh xuân của cậu sẽ được lấp đầy bằng những buổi trò chuyện vui vẻ, những lần cùng nhau cố gắng và những kỷ niệm không thể nào quên. Chúc Ngọc luôn bình an, vui vẻ và tự tin biến ước mơ thành hiện thực! 🌷`,
        image1: "images/buichaubaongoc1.jpg",
        image2: "images/buichaubaongoc2.jpg"
    },

    "lethanhmyngoc": {
        name: "Lê Thanh Mỹ Ngọc",
        message: `Mỹ Ngọc ơi, chúc cậu một ngày 20/10 thật hạnh phúc và nhận được thật nhiều sự quan tâm! 🌸

Mong cậu sẽ luôn tin vào khả năng của bản thân, không ngại thể hiện những điều mình nghĩ và luôn tự hào về những bước tiến dù nhỏ bé của mình. Chúc cậu học tập thuận lợi, có thêm nhiều cơ hội khám phá thế giới xung quanh và luôn tìm được niềm vui trong những điều giản dị nhất.

Mong rằng dù sau này mỗi người có thể đi trên những con đường khác nhau, những kỷ niệm cùng lớp vẫn sẽ là một phần thật đẹp trong tuổi trẻ của cậu. Chúc Mỹ Ngọc luôn gặp được những người tử tế và giữ được nụ cười chân thành trên môi! 💗`,
        image1: "images/lethanhmyngoc1.jpg",
        image2: "images/lethanhmyngoc2.jpg"
    },

    "tominhngoc": {
        name: "Tô Minh Ngọc",
        message: `Minh Ngọc à, nhân ngày 20/10, chúc cậu luôn vui vẻ, bình an và có thật nhiều lý do để mỉm cười mỗi ngày! 💐

Mong cậu sẽ luôn giữ được sự tò mò, ham học hỏi và tinh thần sẵn sàng khám phá những điều mới. Chúc cậu gặp thuận lợi trong học tập, đạt được những mục tiêu mình đặt ra và luôn đủ kiên nhẫn với bản thân trong những lúc chưa làm tốt như mong muốn.

Đừng quên dành thời gian tận hưởng những niềm vui bên gia đình, bạn bè và chăm sóc những điều khiến cậu cảm thấy hạnh phúc. Chúc Ngọc có thật nhiều tình bạn đẹp, những bài học quý giá và những kỷ niệm theo cậu thật lâu về sau! 🌷`,
        image1: "images/tominhngoc1.jpg",
        image2: "images/tominhngoc2.jpg"
    },

    "caothiminhphuong": {
        name: "Cao Thị Minh Phương",
        message: `Minh Phương ơi, chúc cậu có một ngày 20/10 thật ý nghĩa và ngập tràn những điều tốt đẹp! 🌺

Mong cậu luôn giữ được sự kiên trì, bản lĩnh và lòng nhiệt tình khi theo đuổi những mục tiêu của mình. Chúc cậu ngày càng trưởng thành, học hỏi được nhiều điều bổ ích và luôn có đủ tự tin để thử sức với những cơ hội mới.

Trên hành trình phía trước, mong cậu sẽ không chỉ có những thành công đáng tự hào mà còn có những người bạn chân thành để cùng chia sẻ niềm vui, động viên nhau khi gặp khó khăn. Chúc Phương luôn bình an, hạnh phúc và có một tương lai thật nhiều hy vọng! 💗`,
        image1: "images/caothiminhphuong1.jpg",
        image2: "images/caothiminhphuong2.jpg"
    },

    "voletrucquyen": {
        name: "Võ Lê Trúc Quyên",
        message: `Trúc Quyên ơi, chúc cậu ngày 20/10 thật vui vẻ, nhận được nhiều lời chúc dễ thương và có những khoảnh khắc khiến cậu nhớ mãi! 🌷

Mong cậu luôn giữ được nét riêng của mình, tự tin bày tỏ suy nghĩ và không ngừng phát triển những khả năng mà bản thân đang có. Chúc cậu học tập tốt, luôn tìm được niềm vui khi đến lớp và có thêm nhiều trải nghiệm thú vị cùng bạn bè.

Mong những điều cậu đang cố gắng hôm nay sẽ dần mang đến kết quả xứng đáng. Chúc Quyên luôn hạnh phúc, biết trân trọng bản thân và có thật nhiều kỷ niệm đẹp trong những năm tháng học trò! 💐`,
        image1: "images/voletrucquyen1.jpg",
        image2: "images/voletrucquyen2.jpg"
    },

    "luthienthanh": {
        name: "Lữ Thiên Thanh",
        message: `Thiên Thanh thân mến, chúc cậu một ngày 20/10 thật nhẹ nhàng, ấm áp và ngập tràn yêu thương! 🌈

Mong cậu luôn có một trái tim vui vẻ, một tinh thần lạc quan và đủ niềm tin để theo đuổi những điều mình thật sự mong muốn. Chúc cậu mỗi ngày đều học thêm được điều mới, trưởng thành hơn từ những trải nghiệm và biết trân trọng cả những thành công nhỏ trên hành trình của mình.

Hy vọng bên cạnh những giờ học bận rộn sẽ luôn có những phút giây thư giãn, những cuộc trò chuyện vui vẻ và những người bạn sẵn lòng lắng nghe cậu. Chúc Thanh luôn bình an, rạng rỡ và có một thanh xuân thật đáng nhớ! 💗`,
        image1: "images/luthienthanh1.jpg",
        image2: "images/luthienthanh2.jpg"
    },

    "nguyentrieuanhthi": {
        name: "Nguyễn Triệu Anh Thi",
        message: `Anh Thi ơi, chúc cậu có một ngày 20/10 thật tuyệt vời, đầy ắp niềm vui và những lời chúc chân thành! 🌸

Mong cậu luôn giữ được sự nhiệt tình, chăm chỉ và tinh thần không ngại học hỏi của mình. Chúc cậu có thêm nhiều tiến bộ trong học tập, đạt được những mục tiêu đã đề ra và luôn tìm thấy động lực để cố gắng ngay cả khi mọi chuyện chưa diễn ra như mong muốn.

Hy vọng cậu sẽ có thật nhiều dịp được làm những điều mình yêu thích, được chia sẻ niềm vui cùng bạn bè và tạo nên những kỷ niệm đẹp trong quãng đời học sinh. Chúc Anh Thi luôn hạnh phúc, mạnh mẽ và gặp nhiều điều may mắn! 💐`,
        image1: "images/nguyentrieuanhthi1.jpg",
        image2: "images/nguyentrieuanhthi2.jpg"
    },

    "duongthuytien": {
        name: "Dương Thủy Tiên",
        message: `Thủy Tiên à, nhân ngày Phụ nữ Việt Nam 20/10, chúc cậu luôn vui vẻ, bình an và có thật nhiều điều đáng mong chờ trong cuộc sống! 🌷

Mong cậu luôn giữ được sự dịu dàng với những người xung quanh nhưng cũng thật mạnh mẽ khi bảo vệ những điều mình tin tưởng. Chúc cậu học tập thuận lợi, khám phá được nhiều điều thú vị và luôn có những người bạn cùng nhau tạo nên những kỷ niệm đáng nhớ.

Hy vọng cậu sẽ không bao giờ quên dành cho bản thân sự quan tâm và động viên mà cậu vẫn thường dành cho người khác. Chúc Tiên luôn được yêu thương và sống thật hạnh phúc nha! 💗`,
        image1: "images/duongthuytien1.jpg",
        image2: "images/duongthuytien2.jpg"
    },

    "tranlebaotran": {
        name: "Trần Lê Bảo Trân",
        message: `Bảo Trân ơi, chúc cậu một ngày 20/10 thật đáng nhớ, với thật nhiều tiếng cười và những điều làm cậu cảm thấy ấm lòng! 💐

Mong cậu luôn giữ được sự chân thành trong các mối quan hệ, biết quý trọng những người thật lòng quan tâm đến mình và luôn tin rằng bản thân xứng đáng với những điều tốt đẹp. Chúc cậu học tập ngày càng tiến bộ, có thêm nhiều trải nghiệm thú vị và không ngại bước ra khỏi vùng an toàn để khám phá khả năng của mình.

Hy vọng quãng đời học sinh của cậu sẽ có thật nhiều khoảnh khắc vui vẻ và những kỷ niệm mà nhiều năm sau vẫn có thể kể lại bằng nụ cười. Chúc Trân luôn tự tin, hạnh phúc và gặp nhiều may mắn! 🌸`,
        image1: "images/tranlebaotran1.jpg",
        image2: "images/tranlebaotran2.jpg"
    },

    "doannguyenlamtuyen": {
        name: "Đoàn Nguyễn Lâm Tuyền",
        message: `Lâm Tuyền ơi, chúc cậu có một ngày 20/10 tràn ngập niềm vui và nhận được thật nhiều tình cảm chân thành! 🌷

Mong cậu luôn kiên trì với những dự định của mình, biết đứng dậy sau những lần chưa thành công và luôn nhìn về phía trước với niềm tin tích cực. Chúc cậu học tập thật tốt, có thêm nhiều cơ hội phát triển bản thân và luôn tìm được niềm vui trong hành trình trưởng thành.

Hy vọng bên cạnh những mục tiêu cần cố gắng, cậu vẫn có đủ thời gian để tận hưởng tuổi trẻ, trò chuyện cùng bạn bè và lưu giữ những kỷ niệm bình dị nhưng quý giá. Chúc Tuyền luôn bình an, vui vẻ và hạnh phúc! 💗`,
        image1: "images/doannguyenlamtuyen1.jpg",
        image2: "images/doannguyenlamtuyen2.jpg"
    },

    "caothaovan": {
        name: "Cao Thảo Vân",
        message: `Thảo Vân thân mến, chúc cậu có một ngày Phụ nữ Việt Nam thật rạng rỡ và đáng yêu! 🌼

Mong cậu luôn giữ được tinh thần lạc quan, biết tìm thấy niềm vui từ những điều nhỏ bé và lan tỏa sự tích cực đến những người xung quanh. Chúc cậu học tập thuận lợi, có đủ tự tin để thử sức với những điều mới và không ngừng khám phá những khả năng của chính mình.

Hy vọng những ngày tháng sắp tới sẽ mang đến cho cậu nhiều cơ hội đáng quý, những tình bạn chân thành và thật nhiều khoảnh khắc khiến cậu cảm thấy biết ơn vì đã được trải nghiệm. Chúc Vân luôn hạnh phúc và có một thanh xuân thật đẹp! 💐`,
        image1: "images/caothaovan1.jpg",
        image2: "images/caothaovan2.jpg"
    },

    "huynhngocphuongvy": {
        name: "Huỳnh Ngọc Phương Vy",
        message: `Phương Vy ơi, chúc cậu một ngày 20/10 thật ngọt ngào, nhiều niềm vui và ngập tràn những điều bất ngờ dễ thương! 🎀

Mong cậu luôn tự tin với bản thân, dũng cảm theo đuổi những ước mơ và không để những khó khăn nhất thời làm mình quên mất khả năng của chính mình. Chúc cậu đạt được nhiều kết quả tốt trong học tập, có thêm những trải nghiệm đáng nhớ và luôn được bao quanh bởi những người bạn biết lắng nghe, sẻ chia.

Hy vọng tuổi học trò của cậu sẽ có những buổi cười đùa thật thoải mái, những lần cùng nhau cố gắng và những kỷ niệm mà sau này ai cũng muốn nhớ lại. Chúc Vy luôn rạng rỡ và hạnh phúc! 💗`,
        image1: "images/huynhngocphuongvy1.jpg",
        image2: "images/huynhngocphuongvy2.jpg"
    },

    "letrantuongvy": {
        name: "Lê Trần Tường Vy",
        message: `Tường Vy à, nhân ngày 20/10, chúc cậu luôn vui vẻ, bình an và có một ngày thật đặc biệt bên những người yêu quý mình! 🌸

Mong cậu luôn giữ được sự chân thành, lòng nhiệt tình và sự tự tin khi đối diện với những điều mới mẻ. Chúc cậu có những giờ học thật hiệu quả, những mục tiêu dần được hoàn thành và những trải nghiệm giúp bản thân trưởng thành hơn từng ngày.

Hy vọng cậu sẽ luôn tìm được những người bạn tốt để cùng chia sẻ câu chuyện, động viên nhau lúc khó khăn và ăn mừng cùng nhau khi đạt được điều mình mong muốn. Chúc Tường Vy luôn được yêu thương và gặp nhiều điều may mắn! 💐`,
        image1: "images/letrantuongvy1.jpg",
        image2: "images/letrantuongvy2.jpg"
    },

    "vongocminhy": {
        name: "Võ Ngọc Minh Ý",
        message: `Minh Ý ơi, chúc cậu một ngày 20/10 thật ấm áp, hạnh phúc và có thật nhiều lý do để mỉm cười! 💖

Mong cậu luôn tin vào những điều tốt đẹp, trân trọng những điểm riêng của bản thân và kiên trì với những mục tiêu mà mình đã lựa chọn. Chúc cậu học tập ngày càng tiến bộ, có cơ hội khám phá nhiều điều mới và luôn tìm được niềm vui trong những ngày bình thường nhất.

Hy vọng cậu sẽ có thật nhiều người bạn chân thành, những cuộc trò chuyện khiến mình vui vẻ và những kỷ niệm đẹp theo mình suốt những năm tháng trưởng thành. Chúc Minh Ý luôn bình an, tự tin và hạnh phúc với con đường mình chọn nhé! 🌷`,
        image1: "images/vongocminhy1.jpg",
        image2: "images/vongocminhy2.jpg"
    },

    /* =====================================
       CÔ ÁI MINH
    ===================================== */

    "aiminh": {
        name: "Cô Ái Minh",
        message: `Nhân ngày Phụ nữ Việt Nam 20/10, tập thể lớp chúng em xin gửi đến cô Ái Minh những lời chúc tốt đẹp và chân thành nhất! 🌷

Chúc cô luôn xinh đẹp, vui vẻ, mạnh khỏe và hạnh phúc, lúc nào cũng tràn đầy năng lượng và nhiệt huyết với nghề. Cảm ơn cô vì không chỉ truyền đạt cho chúng em những kiến thức lịch sử bổ ích, giúp chúng em hiểu hơn về những trang sử hào hùng của dân tộc, mà còn luôn quan tâm, yêu thương và dìu dắt chúng em trong học tập cũng như trong cuộc sống. ❤️

Mong rằng mỗi ngày đến lớp của cô đều là một ngày vui, luôn nhận được thật nhiều tình yêu thương từ học trò và gặt hái được nhiều thành công trong sự nghiệp trồng người. Chúc cô Ái Minh có một ngày 20/10 thật ý nghĩa, ngập tràn hoa, quà và những nụ cười. Chúng em sẽ cố gắng học tập thật tốt để không phụ lòng mong đợi của cô. 🌸

Chúc cô 20/10 thật hạnh phúc, mãi giữ được ngọn lửa đam mê với môn Lịch sử và luôn là người cô chủ nhiệm tuyệt vời của chúng em! 💖💐`,
        image1: "images/coaiminh1.jpg",
        image2: "images/coaiminh2.jpg"
    }

};


/* =====================================
   3. TÊN GỌI KHÁC
   Ví dụ: nhập "Cô Ái Minh" hoặc "Ái Minh"
===================================== */

const aliases = {
    "coaiminh": "aiminh",
    "aiminh": "aiminh"
};


/* =====================================
   4. XỬ LÝ FORM NHẬP TÊN
===================================== */

document.getElementById("nameForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const input = document.getElementById("nameInput");
    const errorMessage = document.getElementById("errorMessage");

    const normalized = normalizeName(input.value);
    const key = aliases[normalized] || normalized;
    const girl = girls[key];

    if (girl) {
        errorMessage.textContent = "";

        const params = new URLSearchParams({
            name: girl.name,
            message: girl.message,
            image1: girl.image1,
            image2: girl.image2
        });

        window.location.href = `greeting.html?${params.toString()}`;

    } else {
        errorMessage.textContent =
            "Không tìm thấy tên này. Hãy nhập đầy đủ họ tên hoặc kiểm tra lại nhé! 💗";
    }
});
