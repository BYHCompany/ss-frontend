import { Accordion } from "byh-components";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Overview } from "../../../../GlobalTypes/advertTypes";
import {
  translateHeats,
  translateLights,
} from "../../../../services/carTranslators";
import { getOverviewOptions } from "../../../../Store/ducks/advert/advertSelector";

const OverviewOptions = () => {
  const { t } = useTranslation();
  const overview: Overview | undefined = useSelector(getOverviewOptions);

  if (!overview) {
    return null;
  }
  return (
    <Accordion width={770} title={t("advertPage:options.overview.label")}>
      <ul>
        {overview.lights && <li> {translateLights(overview.lights)}</li>}
        {/* {overview.heat && translateHeats(overview.heat).map((h) => h)} */}
        {overview.dayLights && (
          <li>{t("advertPage:options.overview.dayLights")}</li>
        )}
        {overview.fogLights && (
          <li>{t("advertPage:options.overview.fogLights")}</li>
        )}

        {overview.headLightsControl && (
          <li>{t("advertPage:options.overview.headLightsControl")}</li>
        )}

        {overview.headlightWasher && (
          <li>{t("advertPage:options.overview.headlightWasher")}</li>
        )}

        {overview.adaptiveLights && (
          <li>{t("advertPage:options.overview.adaptiveLights")}</li>
        )}

        {overview.rainControl && (
          <li>{t("advertPage:options.overview.rainControl")}</li>
        )}

        {overview.lightSensor && (
          <li>{t("advertPage:options.overview.lightSensor")}</li>
        )}
        {overview.autoBeam && (
          <li>{t("advertPage:options.overview.autoBeam")}</li>
        )}
      </ul>
    </Accordion>
  );
};

export default OverviewOptions;
