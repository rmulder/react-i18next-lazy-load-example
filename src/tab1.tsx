import React from "react";
import { useTranslation } from "react-i18next";

const Tab1 = () => {
  const { t } = useTranslation();
  return <p className='p-4 border border-gray-400'>{t("tab1.description")}</p>;
};

export default Tab1;
