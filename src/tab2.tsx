import React from "react";
import { useTranslation } from "react-i18next";

const Tab2 = () => {
  const { t } = useTranslation('tab2');
  return <p className='p-4 border border-gray-400'>{t("description")}</p>;
};

export default Tab2;
