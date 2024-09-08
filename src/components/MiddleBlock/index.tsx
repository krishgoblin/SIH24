import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection, ContentWrapper, Content } from "./styles";
import { TeamOutlined } from '@ant-design/icons';
import { ReactComponent as BadgeIcon } from './badge-icon.svg'; // Renamed to BadgeIcon
import { ReactComponent as TranslateIcon } from './translate-icon.svg'; // Renamed to BadgeIcon


interface MiddleBlockProps {
  t: TFunction;
  title: string;
  content: string;
  button: string;
}

const MiddleBlock = ({ t, title, content, button }: MiddleBlockProps) => {
  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          {/* Adding the heading */}
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Why Choose GigPath?
          </h2>

          <ContentWrapper>
            <Col lg={8} md={12} sm={24} xs={24}>
              <div style={{ textAlign: 'center' }}>
                {/* Using the renamed BadgeIcon */}
                <BadgeIcon style={{ width: '48px', height: '48px' }} aria-label={t("Badge Icon")} />
                <h6  style={{ fontSize: '40px'}}>{t("Badges")}</h6>
                <Content>{t("Get badges for recommendation")}</Content>
              </div>
            </Col>
            <Col lg={8} md={12} sm={24} xs={24}>
              <div style={{ textAlign: 'center' }}>
                <TranslateIcon style={{ width: '48px', height: '48px' }} aria-label={t("Badge Icon")} />
                <h6  style={{ fontSize: '40px'}}>{t("Multilingual")}</h6>
                <Content>{t("Supports multilingual languages like English and Punjabi")}</Content>
              </div>
            </Col>
            <Col lg={8} md={12} sm={24} xs={24}>
              <div style={{ textAlign: 'center' }}>
                <TeamOutlined style={{ fontSize: '48px', marginBottom: '16px' }} />
                <h6  style={{ fontSize: '40px'}}>{t("Community")}</h6>
                <Content>{t("Great community support to start your journey")}</Content>
              </div>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
