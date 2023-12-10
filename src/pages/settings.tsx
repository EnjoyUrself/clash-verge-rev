import { Box, Grid, IconButton, Paper } from "@mui/material";
import { useLockFn } from "ahooks";
import { useTranslation } from "react-i18next";
import { BasePage, Notice } from "@/components/base";
import { GitHub } from "@mui/icons-material";
import { openWebUrl } from "@/services/cmds";
import SettingVerge from "@/components/setting/setting-verge";
import SettingClash from "@/components/setting/setting-clash";
import SettingSystem from "@/components/setting/setting-system";

const SettingPage = () => {
  const { t } = useTranslation();

  const onError = (err: any) => {
    Notice.error(err?.message || err.toString());
  };

  // const toGithubRepo = useLockFn(() => {
  //   return openWebUrl("https://github.com/Monster-Release/clash-verge-rev");
  // });

  return (
    <BasePage
      title={t("Settings")}
      // header={
      //   <IconButton
      //     size="small"
      //     color="inherit"
      //     title="@clash-verge-rev/clash-verge-rev"
      //     onClick={toGithubRepo}
      //   >
      //     <GitHub fontSize="inherit" />
      //   </IconButton>
      // }
    >
      <Grid container spacing={{ xs: 1, lg: 1 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ borderRadius: 1, boxShadow: 2, marginBottom: 1 }}>
            <SettingSystem onError={onError} />
          </Box>
          <Box sx={{ borderRadius: 1, boxShadow: 2 }}>
            <SettingClash onError={onError} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ borderRadius: 1, boxShadow: 2 }}>
            <SettingVerge onError={onError} />
          </Box>
        </Grid>
      </Grid>
    </BasePage>
  );
};

export default SettingPage;
