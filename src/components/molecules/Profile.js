import icon from "../../images/icon.png";
import styled from "styled-components";

export const Profile = () => {
    return(
        <Swrapper>
            <Sh1>Profile</Sh1>
            <Sflex>
                <div>
                    <Simg src={icon} alt="icon" />
                </div>
                <Sul>
                    <li>氏名：飯田諒平</li>
                    <li>生年月日：１９９９年１月２８日</li>
                    <li>趣味：ジョギング・筋トレ</li>
                    <li>経歴：法政大学スポーツ健康学部卒業</li>
                    <Sli>大学では陸上部で長距離選手として活動</Sli>
                    <Sli>新卒で現場監督の派遣会社に就職</Sli>
                    <Sli>現在は工場の定修工事の現場監督業に従事</Sli>
                </Sul>
            </Sflex>
        </Swrapper>
    )
}

const Swrapper = styled.div`
    background: white;
    border-radius: 8px;
    width: 690px;
    margin: auto;
    padding: 20px;
    text-align: center;
`
const Sh1 = styled.h1`
    margin: 0;
`

const Sflex = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

const Simg = styled.img`
    padding: 40px 20px 0 0;
    width: 250px;
`

const Sul = styled.ul`
    text-align: left;
    line-height: 40px;
    padding: 0 20px;
`

const Sli = styled.li`
    padding-left: 50px;
`