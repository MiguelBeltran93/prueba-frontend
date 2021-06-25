import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { CardMedia, Grid } from '@material-ui/core';
import useStylesSearch from './product-card-input-search.style';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

/**
 *
 * @returns {*}
 * @constructor
 */
const ProductCardSearch = () => {
  const { t } = useTranslation();
  const classes = useStylesSearch();
  const history = useHistory();

  const [item, setItem] = useState('');
  const actionEnterKey = (event) =>
    event.key === 'Enter' &&
    callItem(
      event && event.target && event.target.value ? event.target.value : ''
    );

  const callItem = (itemSearch) => {
    if (itemSearch !== '') {
      history.push(`/items?search=${itemSearch}`);
      sessionStorage.setItem('itemSearch', itemSearch);
    }
  };

  return (
    <Card className={classes.root}>
      <Grid container spacing={1}>
        <Grid item sm={4} xs={3}>
          <Link to={'/'}>
            <picture className={classes.media}>
              <source
                media="(min-width:500px)"
                srcSet={
                  'https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.8/mercadolibre/logo__large_plus.png'
                }
              />
              <img
                src={
                  'https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.8/mercadolibre/logo__small.png'
                }
                alt={t('tituloLogo.label')}
                title={t('tituloLogo.label')}
                onClick={() => {
                  sessionStorage.setItem('itemSearch', '');
                }}
              />
            </picture>
          </Link>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.rootInput}>
            <InputBase
              className={classes.input}
              placeholder={t('placheHolder.label')}
              onChange={(event) => {
                setItem(event.target.value);
              }}
              onKeyDown={(event) => {
                actionEnterKey(event);
              }}
              defaultValue={sessionStorage.getItem('itemSearch') || ''}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
              onClick={() => callItem(item)}
              title={t('buscar.label')}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductCardSearch;
