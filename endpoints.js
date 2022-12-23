const endpoints = { 
  endpoints:[
            { 
              getFamilies: 'api/family. method GET',
              getFamiliesBasedOnAssetTotalPrice: 'api/family/assets. method GET',
              getOneFamily: 'api/family/:id. method GET',
              createFamily: 'api/family. method POST',
              updateFamily: 'api/family/:id. method PUT',
              deleteFamily: 'api/family/:id. method DELETE'
            },
            { 
              getAssets: 'api/asset. method GET',
              getOneAsset: 'api/asset/:id. method GET',
              createAsset: 'api/asset/:familyid. method POST',
              updateAsset: 'api/asset/:id. method PUT',
              deleteAsset: 'api/asset/:id. method DELETE'
            }
            ]
}

module.exports = endpoints